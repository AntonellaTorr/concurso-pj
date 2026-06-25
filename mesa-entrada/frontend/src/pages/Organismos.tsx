import { getOrganismos, getCiudades, getFueros, createOrganismo, updateOrganismo, deleteOrganismo } from "../api";
import { useEffect, useState } from "react";
import { Table, Button, Space, Input, Modal, Form, Select, message } from "antd";
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

export default function Organismos() {

    const columns = [
        { title: "Código", dataIndex: "codigo", key: "codigo" },
        { title: "Nombre", dataIndex: "nombre", key: "nombre" },
        { title: "Título", dataIndex: "titulo", key: "titulo" },
        { title: "Ciudad", dataIndex: ["ciudad", "nombre"], key: "ciudad" },
        { title: "Fuero", dataIndex: ["fuero", "nombre"], key: "fuero" },
        {
            title: "Acciones",
            key: "acciones",
            render: (_: any, record: any) => (
                <Space>
                    <Button size="small" onClick={() => handleEditar(record)}>Editar</Button>
                    <Button size="small" danger onClick={() => handleEliminar(record.codigo)}>Eliminar</Button>
                </Space>
            )
        }
    ];

    const [organismos, setOrganismos] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    const [fueros, setFueros] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [modalAbierto, setModalAbierto] = useState(false);
    const [editando, setEditando] = useState<any>(null);
    const [form] = Form.useForm();

    useEffect(() => {
        cargarOrganismos();
        getCiudades().then(data => setCiudades(data));
        getFueros().then(data => setFueros(data));
    }, []);

    const cargarOrganismos = () => {
        getOrganismos().then(data => setOrganismos(data));
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
            titulo: record.titulo,
            ciudadId: record.ciudad.id,
            fueroId: record.fuero.id,
        });
        setModalAbierto(true);
    };

    const handleEliminar = (codigo: string) => {
        Modal.confirm({
            title: '¿Eliminar organismo?',
            content: `Esta acción no se puede deshacer.`,
            okText: 'Sí, eliminar',
            okType: 'danger',
            cancelText: 'Cancelar',
            onOk: async () => {
                try {
                    await deleteOrganismo(codigo);
                    message.success("Organismo eliminado");
                    cargarOrganismos();
                } catch (error: any) {
                    message.error(error.response?.data?.error ?? "Error al eliminar el organismo");
                }
            }
        });
    };

    const handleGuardar = async () => {
        try {
            const valores = await form.validateFields();

            if (editando) {
                await updateOrganismo(editando.codigo, {
                    nombre: valores.nombre,
                    titulo: valores.titulo,
                    ciudadId: valores.ciudadId,
                    fueroId: valores.fueroId,
                });
                message.success("Organismo actualizado correctamente");
            } else {
                await createOrganismo({
                    nombre: valores.nombre,
                    titulo: valores.titulo,
                    ciudadId: valores.ciudadId,
                    fueroId: valores.fueroId,
                });
                message.success("Organismo creado correctamente");
            }

            setModalAbierto(false);
            setEditando(null);
            cargarOrganismos();

        } catch (error: any) {
            message.error(error.response?.data?.error ?? (editando ? "Error al actualizar" : "Error al crear"));
        }
    };

    const organismosFiltrados = organismos.filter((o: any) =>
        o.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        o.codigo.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <Space style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
                <Input
                    placeholder="Buscar por nombre o código..."
                    prefix={<SearchOutlined />}
                    value={busqueda}
                    onChange={e => setBusqueda(e.target.value)}
                    style={{ width: 300 }}
                />
                <Button type="primary" icon={<PlusOutlined />} onClick={handleNuevo}>
                    Nuevo organismo
                </Button>
            </Space>

            <Table
                columns={columns}
                dataSource={organismosFiltrados}
                rowKey="codigo"
            />

            <Modal
                title={editando ? "Editar organismo" : "Nuevo organismo"}
                open={modalAbierto}
                onOk={handleGuardar}
                onCancel={() => setModalAbierto(false)}
                okText="Guardar"
                cancelText="Cancelar"
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="Nombre" name="nombre" rules={editando ? [] : [{ required: true, message: 'Ingresá el nombre' }]}>
                        <Input placeholder="Juzgado de Familia Nº1" />
                    </Form.Item>
                    <Form.Item label="Título" name="titulo" rules={editando ? [] : [{ required: true, message: 'Ingresá el título' }]}>
                        <Input placeholder="Juzgado de Familia" />
                    </Form.Item>
                    <Form.Item label="Ciudad" name="ciudadId" rules={editando ? [] : [{ required: true, message: 'Seleccioná una ciudad' }]}>
                        <Select
                            placeholder="Seleccionar ciudad"
                            options={ciudades.map((c: any) => ({ value: c.id, label: c.nombre }))}
                            disabled={!!editando}
                        />
                    </Form.Item>
                    <Form.Item label="Fuero" name="fueroId" rules={editando ? [] : [{ required: true, message: 'Seleccioná un fuero' }]}>
                        <Select
                            placeholder="Seleccionar fuero"
                            options={fueros.map((f: any) => ({ value: f.id, label: f.nombre }))}
                            disabled={!!editando}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}