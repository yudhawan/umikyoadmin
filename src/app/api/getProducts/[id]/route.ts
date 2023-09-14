import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const id = params.id
    try {
        const product = await prisma.modelData.findUnique({ where: { id } })
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json({ message: "POST error: ", error }, { status: 500 })
    }
}