import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
    const page = request.nextUrl.searchParams.get("page") || ''
    try {
        const banners = await prisma.banners.findMany({
            where: {
                dir: page
            }
        })
        return NextResponse.json(banners)
    } catch (error) {
        return NextResponse.json({ message: "Cannot find images" }, { status: 500 })
    }
}