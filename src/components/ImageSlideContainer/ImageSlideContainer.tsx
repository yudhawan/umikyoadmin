'use client'
import React from 'react'
import styles from './ImageSlideContainer.module.scss'
import { BannersProp } from '@/type'
import Image from 'next/image'
const ImageSlideContainer = ({ images }: any) => {
    return (
        <div className={styles.imageContainer}>
            {
                images?.map((val: BannersProp) => <Image key={val.id} src={val.image} alt={val.image} width={600} height={600} />)
            }
        </div>
    )
}

export default ImageSlideContainer