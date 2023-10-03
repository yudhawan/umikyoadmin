'use client'
import React from 'react'
import styles from './ProductPreview.module.scss'
import { ProductProp } from '@/type'
import Image from 'next/image'
const ProductPreview = (val: ProductProp) => {
    return (
        <div className={styles.product} key={val.id}>
            <div className={styles.infoProduct}>
                <span className={styles.productName}>{val.product_name}</span>
                <span className={styles.price}>Rp. {val.price}</span>
                {val.category ? <span className={styles.category}>{val.category}{val.sub ? ` > ` + val.sub : ''}</span> : <></>}
                <span className={styles.qualtity}>{val.quantity} items</span>
                <button style={{ cursor: 'pointer' }} className={styles.deleteButton}>Delete</button>
            </div>
            <Image className={styles.image} src={val.images ? val.images : 'https://placehold.co/50x50'} alt={val.product_name} width={200} height={200} />
        </div>
    )
}

export default ProductPreview