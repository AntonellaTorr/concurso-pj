import { Router } from "express";
import { prisma } from "../prisma.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    // Por año
    const porAnio = await prisma.expediente.groupBy({
      by: ["anio"],
      _count: { anio: true },
      orderBy: { anio: "asc" }
    });

    // Por ciudad
    const porCiudad = await prisma.ciudad.findMany({
      include: {
        _count: { select: { expedientes: true } }
      }
    });

    // Por fuero (va por organismo)
    const porFuero = await prisma.$queryRaw`
      SELECT f.nombre, COUNT(*) as total
      FROM Expediente e
      JOIN Organismo o ON e.codigoOrganismo = o.codigo
      JOIN Fuero f ON o.fueroId = f.id
      GROUP BY f.nombre
    `;
    res.json({ 
    porAnio, 
    porCiudad, 
    porFuero: (porFuero as any[]).map(f => ({
        nombre: f.nombre,
        total: Number(f.total)
    }))
});
  } catch (error) {
    console.error("Error al obtener estadísticas:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

export default router;