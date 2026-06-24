import express from "express";
import organismosRouter from "./routes/organismos.js";
import expedientesRouter from "./routes/expedientes.js";
import personasRouter from "./routes/personas.js";
import estadisticasRouter from "./routes/estadisticas.js";
import ciudadesRouter from "./routes/ciudades.js";
import fuerosRouter from "./routes/fueros.js";
import tipoVinculosRouter from "./routes/tipovinculos.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Mesa de Entradas API funcionando" });
});

app.use("/organismos", organismosRouter);
app.use("/expedientes", expedientesRouter);
app.use("/personas", personasRouter);
app.use("/estadisticas", estadisticasRouter);
app.use("/ciudades", ciudadesRouter);
app.use("/fueros", fuerosRouter);
app.use("/tipovinculos", tipoVinculosRouter);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});