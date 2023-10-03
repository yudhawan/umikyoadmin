import { maxNumberSeller } from "@/constant/sellersMaxResult";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
    const page = request.nextUrl.searchParams.get("page") || '0'
    const search = request.nextUrl.searchParams.get("search")
    console.log(page)
    try {
        const users = await prisma.$transaction([
            prisma.users.count(),
            prisma.users.findMany({
                skip: parseInt(page) * maxNumberSeller,
                take: maxNumberSeller,
                select: {
                    alamat_lengkap: true,
                    email: true,
                    fb: true,
                    id: true,
                    ig: true,
                    kode_ref: true,
                    kota: true,
                    nama: true,
                    nama_lengkap: true,
                    picture: true,
                    shoope: true,
                    status: true,
                    verification: true,
                    wa: true,
                    wilayah: true
                }
            })
        ])
        return NextResponse.json({ users: users[1], amount: users[0], page })
    } catch (error) {
        return NextResponse.json({ message: "POST error: ", error }, { status: 500 })
    }
}