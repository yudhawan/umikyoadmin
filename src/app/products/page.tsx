import React from 'react'
import { revalidateTag } from 'next/cache'
import Image from 'next/image'
import TrashIcon from '../../icons/trash.svg'
import FormInputProducts from '@/components/FormInputProducts/FormInputProducts'
import { ProductProp } from '@/type'
import IconComponent from '@/components/Icon/Icon'
import styles from './products.module.scss'
import ProductPreview from '@/components/ProductPreview/ProductPreview'
async function getCategoriesAndSub() {
    const res = await fetch(process.env.BASE_URL + '/api/getCategories', { next: { tags: ["deleteCategory", "postCategory"] } })
    if (!res.ok) return []
    return res.json()
}
async function getProducts() {
    const res = await fetch(process.env.BASE_URL + '/api/getProducts', { next: { tags: ["addProduct"] } })
    if (!res.ok) return []
    return res.json()
}
async function addProduct(data: ProductProp) {
    'use server'
    const res = await fetch(process.env.BASE_URL + '/api/addProduct', {
        method: 'post',
        body: JSON.stringify(data)
    })
    revalidateTag('addProduct')
}
async function ProductsPage() {
    const getDataCategories = await getCategoriesAndSub()
    const getDataProducts = await getProducts()
    return (
        <main className={styles.main}>
            <div>
                <h1 className={styles.title}>Products Page</h1>
                <FormInputProducts categories={getDataCategories?.categories} sub={getDataCategories?.sub} addProduct={addProduct} />
            </div>
            <div className={styles.productsContainer}>
                {
                    getDataProducts?.map((val: ProductProp) => <ProductPreview category={val.category} description={val.description} price={val.price} product_name={val.product_name} quantity={val.quantity} images={val?.images} sub={val.sub} id={val.id} key={val.id} />)
                }
            </div>
        </main>
    )
}

export default ProductsPage