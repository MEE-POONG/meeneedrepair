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

                const deliveryLocation = await prisma.deliveryLocation.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totaldeliveryLocation = await prisma.deliveryLocation.count();
                const totalPage: number = Math.ceil(totaldeliveryLocation / pageSize);
                res.status(200).json({ deliveryLocation });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the deliveryLocation" });
            }
            break;

        case 'POST':
            try {
                const newdeliveryLocation = await prisma.deliveryLocation.create({
                    data: req.body,
                });

                res.status(201).json(newdeliveryLocation);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the deliveryLocation" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}