import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary';
import prisma from "@/lib/prisma";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
export const POST = async (request: Request) => {
    const { image, directory }: { image: string, directory: string } = await request.json()
    const img = await cloudinary.uploader.upload(image, { folder: directory })
    console.log(img)
    if (img) {
        await prisma.banners.create({
            data: {
                image: img?.url,
                dir: directory
            }
        }).then(a => console.log(a))
    }
    return NextResponse.json({ message: 'work' })


}