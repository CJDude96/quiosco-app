import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  //Get all Orders
  if (req.method === "GET") {
    const orders = await prisma.orders.findMany({
      where: {
        completed: false,
      },
    });
    res.status(200).json(orders);
  }

  //New Order
  if (req.method === "POST") {
    const newOrder = await prisma.orders.create({
      data: {
        name: req.body.name,
        total: req.body.total,
        order: req.body.order,
        date: req.body.date,
      },
    });

    res.json(newOrder);
  }
}
