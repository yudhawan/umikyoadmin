import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'
export type BodyProp = {
    category?: string,
    sub?: string
}
export const POST = async (request: NextRequest) => {
    try {
        const origin = request.headers.get('origin')
        const { category, sub }: BodyProp = await request.json()
        if (category) await prisma.categories.create({ data: { category: category } })
        if (sub) await prisma.subCategory.create({ data: { sub: sub } })
        return new NextResponse('created', {
            headers: {
                'Access-Control-Allow-Origin': origin || "*",
                'Content-Type': 'application/json'
            }
        })
    } catch (error) {
        return NextResponse.json({ message: "POST error: ", error }, { status: 500 })
    }
}