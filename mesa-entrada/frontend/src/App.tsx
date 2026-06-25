
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ConfigProvider, Layout, Menu } from 'antd';
import {
  HomeOutlined,
  FileOutlined,
  UserOutlined,
  BankOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import esES from 'antd/locale/es_ES';

import Home from './pages/Home';
import Expedientes from './pages/Expedientes';
import Personas from './pages/Personas';
import Organismos from './pages/Organismos';
import Estadisticas from './pages/Estadisticas';

const { Sider, Content } = Layout;

const menuItems = [
  { key: '/', icon: <HomeOutlined />, label: 'Inicio' },
  { key: '/expedientes', icon: <FileOutlined />, label: 'Expedientes' },
  { key: '/personas', icon: <UserOutlined />, label: 'Personas' },
  { key: '/organismos', icon: <BankOutlined />, label: 'Organismos' },
  { key: '/estadisticas', icon: <BarChartOutlined />, label: 'Estadísticas' },
];

function AppLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme="light" style={{ borderRight: '1px solid #f0f0f0' }}>
        <div onClick={() => navigate('/')} style={{ padding: '16px', cursor: 'pointer', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ fontWeight: 500, fontSize: 14 }}>Mesa de Entradas</div>
          <div style={{ fontSize: 11, color: '#888', marginTop: 2 }}>Poder Judicial Neuquén</div>
        </div>
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ borderRight: 0, marginTop: 8 }}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: 24, background: '#fff' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/expedientes" element={<Expedientes />} />
            <Route path="/personas" element={<Personas />} />
            <Route path="/organismos" element={<Organismos />} />
            <Route path="/estadisticas" element={<Estadisticas />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default function App() {
  return (
    <ConfigProvider locale={esES}>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </ConfigProvider>
  );
}