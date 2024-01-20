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

                const address = await prisma.address.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totalblog = await prisma.address.count();
                const totalPage: number = Math.ceil(totalblog / pageSize);
                res.status(200).json({ address });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the address" });
            }
            break;

        case 'POST':
            try {
                const newblog = await prisma.address.create({
                    data: req.body,
                });

                res.status(201).json(newblog);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the address" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}