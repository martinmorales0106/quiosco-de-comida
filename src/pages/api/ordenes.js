import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  try {
    if (req.method === "GET") {
      // Obtener ordenes
      const ordenes = await prisma.orden.findMany({
        where: {
          estado: false,
        },
      });
      return res.status(200).json(ordenes);
    } else if (req.method === "POST") {
      // Crear Ordenes
      const orden = await prisma.orden.create({
        data: {
          nombre: req.body.nombre,
          total: req.body.total,
          pedido: req.body.pedido,
          fecha: req.body.fecha,
        },
      });
      return res.status(200).json(orden);
    } else {
      // Método HTTP no soportado
      return res.status(405).json({ error: "Método HTTP no permitido" });
    }
  } catch (error) {
    // Manejo de errores
    console.error("Error en la solicitud:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  } finally {
    await prisma.$disconnect(); // Cerrar la conexión de Prisma
  }
}
