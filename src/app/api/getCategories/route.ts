import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
    try {
        const categories = await prisma.categories.findMany()
        const sub = await prisma.subCategory.findMany()
        return NextResponse.json({ categories, sub })
    } catch (error) {
        return NextResponse.json({ message: "Cannot find categories" }, { status: 500 })
    }
}