import express from "express";
import organismosRouter from "./routes/organismos.js";
import expedientesRouter from "./routes/expedientes.js";
import personasRouter from "./routes/personas.js";
import estadisticasRouter from "./routes/estadisticas.js";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Mesa de Entradas API funcionando" });
});

app.use("/organismos", organismosRouter);
app.use("/expedientes", expedientesRouter);
app.use("/personas", personasRouter);
app.use("/estadisticas", estadisticasRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});