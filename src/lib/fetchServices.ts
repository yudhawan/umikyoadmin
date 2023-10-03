import { ProductProp } from "@/type";
import { revalidateTag } from "next/cache";

export const uploadImageServices = async ({ page, file }: { page: string, file: File | Blob }) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async function () {
        const a = await fetch('/api/uploadImage', {
            method: 'post',
            body: JSON.stringify({ image: reader.result, directory: page }),
        })
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}
export const addCategoryAndSub = async ({ category, sub }: { category: string, sub: string }) => {
    const res = await fetch('/api/addCategory', {
        method: 'post',
        body: JSON.stringify({ category, sub })
    })
    console.log(res)
}

export async function addProduct(data: ProductProp) {
    'use server'
    const res = await fetch(process.env.BASE_URL + '/api/addProduct', {
        method: 'post',
        body: JSON.stringify(data)
    })
    revalidateTag('addProduct')
}