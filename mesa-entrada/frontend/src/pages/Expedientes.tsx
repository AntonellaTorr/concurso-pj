import { getExpedientes, getOrganismos, getCiudades, createExpediente, updateExpediente, deleteExpediente, getPersonas, createPersona, getTipoVinculos, removePersonaFromExpediente } from "../api";
import { useEffect, useState } from "react";
import { Table, Button, Space, Input, Modal, Form, Select, message } from "antd";
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

export default function Expedientes() {

  const columns = [
    {
      title: "Clave",
      key: "clave",
      render: (_: any, record: any) =>
        `${record.codigoOrganismo} ${record.tipo} ${record.numero}/${record.anio}`
    },
    { title: "Título", dataIndex: "titulo", key: "titulo" },
    { title: "Ciudad", dataIndex: ["ciudad", "nombre"], key: "ciudad" },
    { title: "Año", dataIndex: "anio", key: "anio" },
    {
      title: "Actor principal",
      key: "actor",
      render: (_: any, record: any) => {
        const actor = record.personas?.find((p: any) => p.vinculo.descripcion === "ACTOR");
        return actor ? `${actor.persona.apellido}, ${actor.persona.nombre}` : "-";
      }
    },
    {
      title: "Acciones",
      key: "acciones",
      render: (_: any, record: any) => (
        <Space>
          <Button size="small" onClick={() => handleVerPersonas(record)}>Personas</Button>
          <Button size="small" onClick={() => handleEditar(record)}>Editar</Button>
          <Button size="small" danger onClick={() => handleEliminar(record)}>Eliminar</Button>
        </Space>
      )
    }
  ];

  const [expedientes, setExpedientes] = useState([]);
  const [organismos, setOrganismos] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [vinculos, setVinculos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalPersonaAbierto, setModalPersonaAbierto] = useState(false);
  const [modalVerPersonasAbierto, setModalVerPersonasAbierto] = useState(false);
  const [expedienteSeleccionado, setExpedienteSeleccionado] = useState<any>(null);
  const [editando, setEditando] = useState<any>(null);
  const [personasAdicionales, setPersonasAdicionales] = useState<any[]>([]);
  const [form] = Form.useForm();
  const [formPersona] = Form.useForm();
  const [formAgregarPersona] = Form.useForm();

  useEffect(() => {
    cargarExpedientes();
    getOrganismos().then(data => setOrganismos(data));
    getCiudades().then(data => setCiudades(data));
    getTipoVinculos().then(data => setVinculos(data));
    cargarPersonas();
  }, []);

  const cargarExpedientes = () => {
    getExpedientes().then(data => setExpedientes(data));
  };

  const cargarPersonas = () => {
    getPersonas().then(data => setPersonas(data));
  };

  const handleNuevo = () => {
    setEditando(null);
    setPersonasAdicionales([]);
    form.resetFields();
    setModalAbierto(true);
  };

  const handleEditar = (record: any) => {
    setEditando(record);
    form.setFieldsValue({
      titulo: record.titulo,
      ciudadId: record.ciudad?.id,
    });
    setModalAbierto(true);
  };

  const handleVerPersonas = (record: any) => {
    setExpedienteSeleccionado(record);
    formAgregarPersona.resetFields();
    setModalVerPersonasAbierto(true);
  };

  const handleEliminar = (record: any) => {
    Modal.confirm({
      title: '¿Eliminar expediente?',
      content: `${record.codigoOrganismo} ${record.tipo} ${record.numero}/${record.anio} — Esta acción no se puede deshacer.`,
      okText: 'Sí, eliminar',
      okType: 'danger',
      cancelText: 'Cancelar',
      onOk: async () => {
        try {
          await deleteExpediente(record.codigoOrganismo, record.tipo, record.numero, record.anio);
          message.success("Expediente eliminado");
          cargarExpedientes();
        } catch (error:any) {
          message.error(error.response?.data?.error ?? "Error al eliminar el expediente");
        }
      }
    });
  };

  const handleGuardar = async () => {
    try {
      const valores = await form.validateFields();

      if (editando) {
        await updateExpediente(
          editando.codigoOrganismo,
          editando.tipo,
          editando.numero,
          editando.anio,
          {
            titulo: valores.titulo,
            ciudadId: valores.ciudadId,
          }
        );
        message.success("Expediente actualizado correctamente");
      } else {
        await createExpediente({
          codigoOrganismo: valores.codigoOrganismo,
          tipo: valores.tipo,
          numero: parseInt(valores.numero),
          anio: parseInt(valores.anio),
          titulo: valores.titulo,
          ciudadId: valores.ciudadId,
          actorDni: valores.actorDni,
          personasAdicionales: personasAdicionales.filter(p => p.dni && p.vinculoId),
        });
        message.success("Expediente creado correctamente");
      }

      setModalAbierto(false);
      setEditando(null);
      setPersonasAdicionales([]);
      cargarExpedientes();

    } catch (error:any) {
      message.error(error.response?.data?.error ?? (editando ? "Error al actualizar" : "Error al crear"));
    }
  };

  const handleGuardarPersona = async () => {
    try {
      const valores = await formPersona.validateFields();
      await createPersona(valores);
      message.success("Persona creada correctamente");
      setModalPersonaAbierto(false);
      formPersona.resetFields();
      await cargarPersonas();
      form.setFieldsValue({ actorDni: valores.dni });
    } catch (error:any) {
      message.error(error.response?.data?.error ??  "Error al crear la persona");
    }
  };

  const handleEliminarPersonaDeExpediente = async (dni: string) => {
    try {
      await removePersonaFromExpediente(
        expedienteSeleccionado.codigoOrganismo,
        expedienteSeleccionado.tipo,
        expedienteSeleccionado.numero,
        expedienteSeleccionado.anio,
        dni
      );
      message.success("Persona eliminada del expediente");
      cargarExpedientes();
      
      const actualizados = await import("../api").then(api => api.getExpedientes());
      const actualizado = actualizados.find((e: any) =>
        e.codigoOrganismo === expedienteSeleccionado.codigoOrganismo &&
        e.tipo === expedienteSeleccionado.tipo &&
        e.numero === expedienteSeleccionado.numero &&
        e.anio === expedienteSeleccionado.anio
      );
      if (actualizado) setExpedienteSeleccionado(actualizado);
    } catch (error: any) {
      message.error(error.response?.data?.error ?? "Error al eliminar persona");
    }
  };

  const handleAgregarPersonaAExpediente = async () => {
    try {
      const valores = await formAgregarPersona.validateFields();
      const { addPersonaToExpediente } = await import("../api");
      await addPersonaToExpediente(
        expedienteSeleccionado.codigoOrganismo,
        expedienteSeleccionado.tipo,
        expedienteSeleccionado.numero,
        expedienteSeleccionado.anio,
        { personaDni: valores.dni, vinculoId: valores.vinculoId }
      );
      message.success("Persona agregada al expediente");
      formAgregarPersona.resetFields();
      cargarExpedientes();
    } catch (error:any) {
      message.error(error.response?.data?.error ?? "Error al agregar persona");
    }
  };

  const agregarPersonaAdicional = () => {
    setPersonasAdicionales([...personasAdicionales, { dni: "", vinculoId: "" }]);
  };

  const eliminarPersonaAdicional = (index: number) => {
    setPersonasAdicionales(personasAdicionales.filter((_, i) => i !== index));
  };

  const actualizarPersonaAdicional = (index: number, campo: string, valor: any) => {
    const nuevas = [...personasAdicionales];
    nuevas[index] = { ...nuevas[index], [campo]: valor };
    setPersonasAdicionales(nuevas);
  };

  const expedientesFiltrados = expedientes.filter((e: any) =>
    e.titulo?.toLowerCase().includes(busqueda.toLowerCase()) ||
    e.codigoOrganismo?.toLowerCase().includes(busqueda.toLowerCase())
  );

  const vinculosSinActor = vinculos.filter((v: any) => v.descripcion !== "ACTOR");

  return (
    <div>
      <Space style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
        <Input
          placeholder="Buscar por título u organismo..."
          prefix={<SearchOutlined />}
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          style={{ width: 300 }}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={handleNuevo}>
          Nuevo expediente
        </Button>
      </Space>

      <Table
        columns={columns}
        dataSource={expedientesFiltrados}
        rowKey={(r: any) => `${r.codigoOrganismo}-${r.tipo}-${r.numero}-${r.anio}`}
      />

      {/* Modal expediente */}
      <Modal
        title={editando ? "Editar expediente" : "Nuevo expediente"}
        open={modalAbierto}
        onOk={handleGuardar}
        onCancel={() => { setModalAbierto(false); setPersonasAdicionales([]); }}
        okText="Guardar"
        cancelText="Cancelar"
        width={650}
      >
        <Form form={form} layout="vertical">

          {!editando && (
            <>
              <Form.Item label="Organismo" name="codigoOrganismo" rules={[{ required: true, message: 'Seleccioná un organismo' }]}>
                <Select
                  placeholder="Seleccionar organismo"
                  showSearch
                  optionFilterProp="label"
                  options={organismos.map((o: any) => ({
                    value: o.codigo,
                    label: `${o.codigo} — ${o.nombre}`
                  }))}
                />
              </Form.Item>

              <Space style={{ width: '100%' }} size={12}>
                <Form.Item label="Tipo" name="tipo" rules={[{ required: true, message: 'Seleccioná el tipo' }]} style={{ width: 120 }}>
                  <Select options={[{ value: 'EXP', label: 'EXP' }, { value: 'LEG', label: 'LEG' }]} />
                </Form.Item>
                <Form.Item label="Número" name="numero" rules={[{ required: true, message: 'Ingresá el número' }]} style={{ flex: 1 }}>
                  <Input type="number" placeholder="001" />
                </Form.Item>
                <Form.Item label="Año" name="anio" rules={[{ required: true, message: 'Ingresá el año' }]} style={{ width: 100 }}>
                  <Input type="number" placeholder="2025" />
                </Form.Item>
              </Space>

              <Form.Item
                label="Actor principal"
                name="actorDni"
                rules={[{ required: true, message: 'El actor principal es obligatorio' }]}
              >
                <Select
                  placeholder="Buscar persona por DNI o nombre"
                  showSearch
                  optionFilterProp="label"
                  options={personas.map((p: any) => ({
                    value: p.dni,
                    label: `${p.dni} — ${p.apellido}, ${p.nombre}`
                  }))}
                />
              </Form.Item>
              <Button
                type="link"
                style={{ marginTop: -16, marginBottom: 12, paddingLeft: 0 }}
                onClick={() => setModalPersonaAbierto(true)}
              >
                + Crear nueva persona
              </Button>

              {/* Personas adicionales */}
              <Form.Item label="Otras personas (opcional)">
                {personasAdicionales.map((p, index) => (
                  <Space key={index} style={{ display: 'flex', marginBottom: 8 }} align="start">
                    <Select
                      placeholder="Persona"
                      showSearch
                      optionFilterProp="label"
                      style={{ width: 220 }}
                      value={p.dni || undefined}
                      onChange={val => actualizarPersonaAdicional(index, 'dni', val)}
                      options={personas.map((per: any) => ({
                        value: per.dni,
                        label: `${per.dni} — ${per.apellido}, ${per.nombre}`
                      }))}
                    />
                    <Select
                      placeholder="Vínculo"
                      style={{ width: 150 }}
                      value={p.vinculoId || undefined}
                      onChange={val => actualizarPersonaAdicional(index, 'vinculoId', val)}
                      options={vinculosSinActor.map((v: any) => ({
                        value: v.id,
                        label: v.descripcion
                      }))}
                    />
                    <Button danger size="small" onClick={() => eliminarPersonaAdicional(index)}>✕</Button>
                  </Space>
                ))}
                <Button type="dashed" onClick={agregarPersonaAdicional} icon={<PlusOutlined />}>
                  Agregar persona
                </Button>
              </Form.Item>
            </>
          )}

          <Form.Item
            label="Título"
            name="titulo"
            rules={editando ? [] : [{ required: true, message: 'Ingresá el titulo' }]}
          >
            <Input placeholder="García c/ Municipalidad de Neuquén" />
          </Form.Item>

          <Form.Item
            label="Ciudad"
            name="ciudadId"
            rules={editando ? [] : [{ required: true, message: 'Seleccioná una ciudad' }]}
          >
            <Select
              placeholder="Seleccionar ciudad"
              options={ciudades.map((c: any) => ({ value: c.id, label: c.nombre }))}
            />
          </Form.Item>

        </Form>
      </Modal>

      {/* Modal nueva persona */}
      <Modal
        title="Nueva persona"
        open={modalPersonaAbierto}
        onOk={handleGuardarPersona}
        onCancel={() => setModalPersonaAbierto(false)}
        okText="Guardar"
        cancelText="Cancelar"
      >
        <Form form={formPersona} layout="vertical">
          <Form.Item label="DNI" name="dni" rules={[{ required: true, message: 'Ingresá el DNI' }]}>
            <Input placeholder="12345678" />
          </Form.Item>
          <Form.Item label="Apellido" name="apellido" rules={[{ required: true, message: 'Ingresá el apellido' }]}>
            <Input placeholder="García" />
          </Form.Item>
          <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Ingresá el nombre' }]}>
            <Input placeholder="Juan" />
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal ver/agregar personas al expediente */}
      <Modal
        title={`Personas — ${expedienteSeleccionado?.codigoOrganismo} ${expedienteSeleccionado?.tipo} ${expedienteSeleccionado?.numero}/${expedienteSeleccionado?.anio}`}
        open={modalVerPersonasAbierto}
        onCancel={() => setModalVerPersonasAbierto(false)}
        footer={null}
        width={600}
      >
        {/* Lista de personas actuales */}
        <Table
          size="small"
          rowKey="personaDni"
          dataSource={expedienteSeleccionado?.personas ?? []}
          columns={[
            {
              title: "Persona",
              render: (_: any, r: any) => `${r.persona.apellido}, ${r.persona.nombre}`
            },
            { title: "DNI", dataIndex: "personaDni", key: "personaDni" },
            {
              title: "Vínculo",
              render: (_: any, r: any) => r.vinculo.descripcion
            },
            {
              title: "",
              render: (_: any, r: any) =>
                r.vinculo.descripcion !== "ACTOR" ? (
                  <Button
                    size="small"
                    danger
                    onClick={() => handleEliminarPersonaDeExpediente(r.personaDni)}
                  >
                    Eliminar
                  </Button>
                ) : null
            }
          ]}
          pagination={false}
          style={{ marginBottom: 16 }}
        />

        {/* Agregar nueva persona */}
        <Form form={formAgregarPersona} layout="vertical">
          <Form.Item label="Persona" name="dni" rules={[{ required: true, message: 'Seleccioná una persona' }]}>
            <Select
              placeholder="Buscar persona"
              showSearch
              optionFilterProp="label"
              options={personas.map((p: any) => ({
                value: p.dni,
                label: `${p.dni} — ${p.apellido}, ${p.nombre}`
              }))}
            />
          </Form.Item>
          <Form.Item label="Vínculo" name="vinculoId" rules={[{ required: true, message: 'Seleccioná un vínculo' }]}>
            <Select
              placeholder="Seleccionar vínculo"
              options={vinculosSinActor.map((v: any) => ({ value: v.id, label: v.descripcion }))}
            />
          </Form.Item>
          <Button type="primary" onClick={handleAgregarPersonaAExpediente}>
            Agregar persona al expediente
          </Button>
        </Form>
      </Modal>

    </div>
  );
}