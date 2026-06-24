import Routes from "express";
import { prisma } from "../prisma.js";

const router = Routes();
router.get("/", async (req, res) => {
  try {
    const TipoVinculos = await prisma.tipoVinculo.findMany();   
    res.json(TipoVinculos);
    } catch (error) {
        console.error("Error al obtener tipos de vinculos:", error);    
        res.status(500).json({ error: "Error interno del servidor" });
    }   
});
export default router;