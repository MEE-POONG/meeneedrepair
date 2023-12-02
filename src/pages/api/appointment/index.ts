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

                const reservation = await prisma.reservation.findMany({
                    // skip: (page - 1) * pageSize,
                    // take: pageSize,
                    include:{
                        User : true
                    },
                });

                const totalappointment = await prisma.reservation.count();
                const totalPage: number = Math.ceil(totalappointment / pageSize);
                res.status(200).json({ reservation });
            } catch (error) {
                res.status(500).json({ error: "An error occurred while fetching the reservation" });
            }
            break;

        case 'POST':
            try {
                const newappointment = await prisma.reservation.create({
                    include:{
                        User : true
                    },
                    data: req.body,
                });

                res.status(201).json(newappointment);
            } catch (error) {
                res.status(500).json({ error: "An error occurred while creating the reservation" });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}