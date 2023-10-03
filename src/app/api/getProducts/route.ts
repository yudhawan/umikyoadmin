import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'

export const GET = async () => {
    try {
        const products = await prisma.products.findMany()
        return NextResponse.json(products)
    } catch (error) {
        return NextResponse.json({ message: "POST error: ", error }, { status: 500 })
    }
}