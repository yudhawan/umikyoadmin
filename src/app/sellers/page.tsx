import React from 'react'
import styles from './sellers.module.scss'
import { SellerType } from '@/type'
import SellersTable from '@/components/SellersTable/SellersTable'
import Pagination from '@/components/Pagination/Pagination'
type GetSellerProp = {
    search?: string,
    page: number
}
async function getSellers({ search, page }: GetSellerProp) {
    try {
        const res = await fetch(process.env.BASE_URL + '/api/getSellers?page=' + page + '&search=' + search, { next: { tags: ["deleteSeller", "sellerActiveAndDeactive"] } })
        if (!res.ok) return []
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
async function Sellers() {
    const page = 1
    const data = await getData(page)
    async function getData(page = 1) {
        'use server'
        return await getSellers({ page: page })
    }
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Sellers</h1>
            <SellersTable sellers={data?.users} />
            <Pagination amount={data?.amount} page={parseInt(data?.page)} getData={getData} />
        </div>
    )
}

export default Sellers