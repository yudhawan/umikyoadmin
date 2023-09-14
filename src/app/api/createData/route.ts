import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'
export type BodyProp = {
    name: string,
    texts: string
}
export const POST = async (request: NextRequest) => {
    try {
        const body = await request.json()
        return NextResponse.json('sukses')
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "POST error: ", error }, { status: 500 })
    }
}