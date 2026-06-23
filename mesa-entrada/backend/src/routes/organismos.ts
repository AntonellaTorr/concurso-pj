import Router from "express";
import { prisma } from "../prisma.js";

const router = Router();

// GET /organismos
router.get("/", async (req, res) => {
  try {
    const organismos = await prisma.organismo.findMany();
    res.json(organismos);
  } catch (error) {
    console.error("Error al obtener organismos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// GET /organismos/:codigo
router.get("/:codigo", async (req, res) => {
    const { codigo } = req.params;
    try{
        const organismo = await prisma.organismo.findUnique({
            where: { codigo }
        });
        if (!organismo) {
            return res.status(404).json({ error: "Organismo no encontrado" });
        }
        res.json(organismo);
    } catch (error) {
        console.error("Error al obtener el organismo:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
});
// POST /organismos
router.post("/", async (req, res) => {
    const { nombre,titulo, ciudadId, fueroId  } = req.body;

    const ciudad= await prisma.ciudad.findUnique({ where: { id: ciudadId } });
    const fuero= await prisma.fuero.findUnique({ where: { id: fueroId } }); 

     if (!ciudad || !fuero) {
      return res.status(400).json({ error: "Ciudad o fuero no válido" });
    }

    const codigo = `J${ciudad.codigo}${fuero.codigo}`;

    try {           
        const organismo = await prisma.organismo.create({
        data: { codigo, nombre, titulo, ciudadId, fueroId },
        });
        res.status(201).json(organismo);
  } catch (error) {
        console.error("Error al crear el organismo:", error);
        res.status(500).json({ error: "Error interno del servidor" });
  }
});
//PUT /organismos/:codigo
router.put("/:codigo", async (req, res) => {
    const { codigo } = req.params;
    const { nombre, titulo, ciudadId, fueroId } = req.body;

    const ciudad= await prisma.ciudad.findUnique({ where: { id: ciudadId } });
    const fuero= await prisma.fuero.findUnique({ where: { id: fueroId } });     
    
    if (!ciudad || !fuero) {
      return res.status(400).json({ error: "Ciudad o fuero no válido" });
    }       

try { 
    await prisma.organismo.update({
        where: { codigo },
        data: { nombre, titulo, ciudadId, fueroId },
    });
    res.json({ message: "Organismo actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el organismo:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }     
}
);
//DELETE /organismos/:codigo
router.delete("/:codigo", async (req, res) => {         
        const { codigo } = req.params;
        try {
            await prisma.organismo.delete({
                where: { codigo }
            });
            res.json({ message: "Organismo eliminado correctamente" });
        } catch (error) {
            console.error("Error al eliminar el organismo:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
);
export default router;