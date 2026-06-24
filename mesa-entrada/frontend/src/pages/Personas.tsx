import { getPersonas, deletePersona, updatePersona, createPersona, getExpedientesByPersona } from "../api";
import { useEffect, useState } from "react";
import { Table, Button, Space, Input, Modal, Form, message } from "antd";
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

export default function Personas() {

    const columns = [
        { title: "Dni", dataIndex: "dni", key: "dni" },
        { title: "Nombre", dataIndex: "nombre", key: "nombre" },
        { title: "Apellido", dataIndex: "apellido", key: "apellido" },
        {
            title: "Acciones",
            key: "acciones",
            render: (_: any, record: any) => (
                <Space>
                    <Button size="small" onClick={() => handleEditar(record)}>Editar</Button>
                    <Button size="small" danger onClick={() => handleEliminar(record.dni)}>Eliminar</Button>
                    <Button size="small"  style={{ color: '#531dab', borderColor: '#531dab' }} onClick={() => handleVerExpedientes(record)}>Expedientes</Button>
                </Space>
            )
        }
    ];

    const [personas, setPersonas] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [modalAbierto, setModalAbierto] = useState(false);
    const [editando, setEditando] = useState<any>(null);
    const [form] = Form.useForm();
    const [modalExpedientesAbierto, setModalExpedientesAbierto] = useState(false);
    const [expedientesPersona, setExpedientesPersona] = useState([]);
    const [personaSeleccionada, setPersonaSeleccionada] = useState<any>(null);



    useEffect(() => {
        cargarPersonas();
    }, []);

    const cargarPersonas = () => {
        getPersonas().then(data => setPersonas(data));
    };

    const handleNuevo = () => {
        setEditando(null);
        form.resetFields();
        setModalAbierto(true);
    };

    const handleEditar = (record: any) => {
        setEditando(record);
        form.setFieldsValue({
            nombre: record.nombre,
            apellido: record.apellido,
        });
        setModalAbierto(true);
    };

    const handleEliminar = (dni: string) => {
        Modal.confirm({
            title: '¿Eliminar persona?',
            content: `Esta acción no se puede deshacer.`,
            okText: 'Sí, eliminar',
            okType: 'danger',
            cancelText: 'Cancelar',
            onOk: async () => {
                try {
                    await deletePersona(dni);
                    message.success("Persona eliminada");
                    cargarPersonas();
                } catch (error:any) {
                    message.error(error.response?.data?.error ?? "Error al eliminar la persona");
                }
            }
        });
    };

    const handleGuardar = async () => {
        try {
            const valores = await form.validateFields();

            if (editando) {
                await updatePersona(editando.dni, {
                    nombre: valores.nombre,
                    apellido: valores.apellido,
                });
                message.success("Persona actualizada correctamente");
            } else {
                await createPersona({
                    dni: valores.dni,
                    nombre: valores.nombre,
                    apellido: valores.apellido,
                });
                message.success("Persona creada correctamente");
            }

            setModalAbierto(false);
            setEditando(null);
            cargarPersonas();

        } catch (error:any) {
            message.error(error.response?.data?.error ?? (editando ? "Error al actualizar" : "Error al crear"));
        }
    };

    const personasFiltradas = personas.filter((p: any) =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.dni.includes(busqueda)
    );

    const handleVerExpedientes = async (record: any) => {
        setPersonaSeleccionada(record);
        const data = await getExpedientesByPersona(record.dni);
        setExpedientesPersona(data.expedientes);
        setModalExpedientesAbierto(true);
    };

    return (
        <div>
            <Space style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
                <Input
                    placeholder="Buscar por dni, nombre o apellido"
                    prefix={<SearchOutlined />}
                    value={busqueda}
                    onChange={e => setBusqueda(e.target.value)}
                    style={{ width: 300 }}
                />
                <Button type="primary" icon={<PlusOutlined />} onClick={handleNuevo}>
                    Nueva persona
                </Button>
            </Space>

            <Table
                columns={columns}
                dataSource={personasFiltradas}
                rowKey="dni"
            />

            <Modal
                title={editando ? "Editar persona" : "Nueva persona"}
                open={modalAbierto}
                onOk={handleGuardar}
                onCancel={() => setModalAbierto(false)}
                okText="Guardar"
                cancelText="Cancelar"
            >
                {!editando && (
                    <Form.Item
                        label="DNI"
                        name="dni"
                        rules={[{ required: true, message: 'Ingresá el DNI' }]}
                    >
                        <Input placeholder="12345678" />
                    </Form.Item>
                )}

                <Form form={form} layout="vertical">
                    <Form.Item label="Nombre" name="nombre" rules={editando ? [] : [{ required: true, message: 'Ingresá el nombre' }]}>
                        <Input placeholder="Noelia" />
                    </Form.Item>
                    <Form.Item label="Apellido" name="apellido" rules={editando ? [] : [{ required: true, message: 'Ingresá el apellido' }]}>
                        <Input placeholder="Gómez" />
                    </Form.Item>

                </Form>
            </Modal>
            <Modal
                title={`Expedientes de ${personaSeleccionada?.apellido}, ${personaSeleccionada?.nombre}`}
                open={modalExpedientesAbierto}
                onCancel={() => setModalExpedientesAbierto(false)}
                footer={null}
                width={600}
            >
                <Table
                    size="small"
                    rowKey={(r: any) => `${r.expediente.codigoOrganismo}-${r.expediente.tipo}-${r.expediente.numero}-${r.expediente.anio}`}
                    dataSource={expedientesPersona}
                    columns={[
                        {
                            title: "Clave",
                            render: (_: any, r: any) =>
                                `${r.expediente.codigoOrganismo} ${r.expediente.tipo} ${r.expediente.numero}/${r.expediente.anio}`
                        },
                        { title: "Carátula", render: (_: any, r: any) => r.expediente.titulo },
                        { title: "Vínculo", render: (_: any, r: any) => r.vinculo.descripcion },
                    ]}
                    pagination={false}
                />
            </Modal>
        </div>
    );
}