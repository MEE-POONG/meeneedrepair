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

                const taxinvoice = await prisma.taxinvoice.findMany({
                    skip: (page - 1) * pageSize,
                    take: pageSize,
                });

                const totaltaxinvoice = await prisma.taxinvoice.count();
                const totalPage: number = Math.ceil(totaltaxinvoice / pageSize);
                res.status(200).json({ taxinvoice });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the taxinvoice" });
            }
            break;

        case 'POST':
            try {
                const newtaxinvoice = await prisma.taxinvoice.create({
                    data: req.body,
                });

                res.status(201).json(newtaxinvoice);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the taxinvoice" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}