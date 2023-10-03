import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'
export type BodyProp = {
    id: string,
    type: string
}
export const POST = async (request: NextRequest) => {
    try {
        const { id, type }: BodyProp = await request.json()
        if (type === 'category') await prisma.categories.delete({ where: { id } })
        if (type === 'sub') await prisma.subCategory.delete({ where: { id } })
        return NextResponse.json('removed')
    } catch (error) {
        return NextResponse.json({ message: "POST error: ", error }, { status: 500 })
    }
}