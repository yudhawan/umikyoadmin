import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary';
import prisma from "@/lib/prisma";
import { ProductProp } from '@/type';
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
export const POST = async (request: NextRequest) => {
    try {
        const data: ProductProp = await request.json()
        // @ts-ignore
        const img = await cloudinary.uploader.upload(data?.images, { folder: 'products' })
        if (img.url) {
            data.images = img.url
            // @ts-ignore
            await prisma.products.create({ data: data })
        }
        return NextResponse.json('created', { status: 202 })
    } catch (error) {
        return NextResponse.json({ message: "POST error: ", error }, { status: 500 })
    }
}