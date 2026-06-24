import { useEffect, useState } from "react";
import { getEstadisticas } from "../api";
import { Typography } from "antd";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

const { Title } = Typography;

const COLORES = ['#185FA5', '#52c41a', '#fa8c16', '#722ed1'];

export default function Estadisticas() {
  const [datos, setDatos] = useState<any>(null);

  useEffect(() => {
    getEstadisticas().then(data => setDatos(data));
  }, []);

  if (!datos) return <div>Cargando...</div>;

  // Transformar datos para Recharts
  const porAnio = datos.porAnio.map((d: any) => ({
    anio: d.anio,
    total: d._count.anio
  }));

  const porCiudad = datos.porCiudad.map((d: any) => ({
    nombre: d.nombre,
    total: d._count.expedientes
  }));

  const porFuero = datos.porFuero.map((d: any) => ({
    nombre: d.nombre,
    total: Number(d.total)
  }));

  return (
    <div style={{ padding: 24 }}>
      <Title level={3}>Estadísticas</Title>

      {/* Por año */}
      <Title level={5} style={{ marginTop: 24 }}>Expedientes por año</Title>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={porAnio}>
          <XAxis dataKey="anio" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="total" fill="#185FA5" name="Expedientes" />
        </BarChart>
      </ResponsiveContainer>

      {/* Por ciudad y fuero en dos columnas */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginTop: 32 }}>

        <div>
          <Title level={5}>Por ciudad</Title>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={porCiudad} dataKey="total" nameKey="nombre" cx="50%" cy="50%" outerRadius={80} label={({ payload }: any) => `${payload.nombre}: ${payload.total}`}>
                {porCiudad.map((_: any, index: number) => (
                  <Cell key={index} fill={COLORES[index % COLORES.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div>
          <Title level={5}>Por fuero</Title>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={porFuero} dataKey="total" nameKey="nombre" cx="50%" cy="50%" outerRadius={80} label={({ payload }: any) => `${payload.nombre}: ${payload.total}`}>
                {porFuero.map((_: any, index: number) => (
                  <Cell key={index} fill={COLORES[index % COLORES.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}