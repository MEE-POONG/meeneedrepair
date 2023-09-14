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

                const messenger = await prisma.messenger.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalmessenger = await prisma.messenger.count();
                const totalPage: number = Math.ceil(totalmessenger / pageSize);
                res.status(200).json({ messenger });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the messenger" });
            }
            break;

        case 'POST':
            try {
                const newmessenger = await prisma.messenger.create({
                    data: req.body,
                });

                res.status(201).json(newmessenger);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the messenger" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}