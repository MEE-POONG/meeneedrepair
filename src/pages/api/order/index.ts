import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const page: number = Number(req.query.page) || 1;
                const pageSize: number = Number(req.query.pageSize) || 10;

                const orders = await prisma.order.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalorder = await prisma.order.count();
                const totalPage: number = Math.ceil(totalorder / pageSize);
                res.status(200).json({ orders });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the product" });
            }
            break;

        case 'POST':
            try {
                const neworder = await prisma.order.create({
                    data: req.body,
                });

                res.status(201).json(neworder);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the product" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}