import { Card, Typography, Row, Col } from 'antd';
import { FileOutlined, UserOutlined, BarChartOutlined, AuditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title, Text } = Typography;

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: 40 }}>

      <div style={{ width: 72, height: 72, borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <AuditOutlined style={{ fontSize: 36, color: '#185FA5' }} />
      </div>

      <Title level={2} style={{ textAlign: 'center', marginBottom: 4 }}>
        Mesa de Entradas Virtual
      </Title>
      <Text type="secondary" style={{ textAlign: 'center' }}>
        Dirección General de Informática — Poder Judicial de Neuquén
      </Text>

      <div style={{ width: 40, height: 3, background: '#185FA5', borderRadius: 2, margin: '24px 0' }} />

      <Row gutter={16} style={{ width: '100%', maxWidth: 700 }}>
        <Col span={8}>
          <Card hoverable onClick={() => navigate('/expedientes')} style={{ textAlign: 'center' }}>
            <FileOutlined style={{ fontSize: 28, color: '#185FA5' }} />
            <Title level={5} style={{ marginTop: 8, marginBottom: 4 }}>Expedientes</Title>
            <Text type="secondary" style={{ fontSize: 12 }}>Buscar y gestionar</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable onClick={() => navigate('/personas')} style={{ textAlign: 'center' }}>
            <UserOutlined style={{ fontSize: 28, color: '#185FA5' }} />
            <Title level={5} style={{ marginTop: 8, marginBottom: 4 }}>Personas</Title>
            <Text type="secondary" style={{ fontSize: 12 }}>Gestionar personas</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable onClick={() => navigate('/estadisticas')} style={{ textAlign: 'center' }}>
            <BarChartOutlined style={{ fontSize: 28, color: '#185FA5' }} />
            <Title level={5} style={{ marginTop: 8, marginBottom: 4 }}>Estadísticas</Title>
            <Text type="secondary" style={{ fontSize: 12 }}>Ver reportes</Text>
          </Card>
        </Col>
      </Row>
    </div>
  );
}