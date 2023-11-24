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

                const reserveProductTpye = await prisma.reserveProductTpye.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalreserveProductTpye = await prisma.reserveProductTpye.count();
                const totalPage: number = Math.ceil(totalreserveProductTpye / pageSize);
                res.status(200).json({ reserveProductTpye });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the reserveProductTpye" });
            }
            break;

        case 'POST':
            try {
                const newreserveProductTpye = await prisma.reserveProductTpye.create({
                    data: req.body,
                });

                res.status(201).json(newreserveProductTpye);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the reserveProductTpye" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}