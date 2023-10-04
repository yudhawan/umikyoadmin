import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'
export type BodyProp = {
    category?: string,
    sub?: string
}
// export const POST = async (request: NextRequest) => {
//     try {
//         const { category, sub }: BodyProp = await request.json()
//         if (category) await prisma.categories.create({ data: { category: category } })
//         if (sub) await prisma.subCategory.create({ data: { sub: sub } })
//         return NextResponse.json('created', { status: 202 })
//     } catch (error) {
//         return NextResponse.json({ message: "POST error: ", error }, { status: 500 })
//     }
// }
export const GET = async (request: NextRequest) => {
    try {
        const test = await prisma.categories.findMany()
        return NextResponse.json({ categories: test }, { status: 202 })
    } catch (error) {
        return NextResponse.json({ message: "POST error: ", error }, { status: 500 })
    }
}