'use client'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ImgIcon from '../../../icons/image.svg'
import styles from './FormInputProducts.module.scss'
import { CategoriesProp, ProductProp, SubProp } from '@/type'
import IconComponent from '../Icon/Icon'
import Image from 'next/image'
function FormInputProducts({ categories, sub, addProduct }: { categories: CategoriesProp[], sub: SubProp[], addProduct: (data: ProductProp) => Promise<void> }) {
    const img = useRef<HTMLImageElement>(null)
    const [file, setFile] = useState<any>()
    const [picture, setPicture] = useState<string>()
    const [imageSizeError, setImageSizeError] = useState<string>()
    const { register, getValues, handleSubmit, reset } = useForm()
    return (
        <form className={styles.formInput} onSubmit={handleSubmit((data) => {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async function () {
                data = { ...data, images: reader.result }
                // @ts-ignore
                addProduct(data)
                reset()
                setPicture('')
                // @ts-ignore
                img.current.src = ''
            };
        })}>
            <input className={styles.input} type='text' {...register('product_name', { required: true })} placeholder='Name*' />
            <input className={styles.input} type='number' min={1} {...register('quantity', { required: true, valueAsNumber: true })} placeholder='Quantity*' />
            <input className={styles.input} type='number' min={1} {...register('price', { required: true, valueAsNumber: true })} placeholder='Harga*' />
            <select className={styles.input} {...register('category', { required: true })} >
                <option value="default" disabled selected>Select your categories*</option>
                {
                    categories?.map((val: { id: string, category: string }) => <option key={val.id} value={val.category}>{val.category}</option>)
                }
            </select>
            <select className={styles.input} {...register('sub')} >
                <option value="default" disabled selected>Select your sub</option>
                {
                    sub?.map((val: { id: string, sub: string }) => <option key={val.id} value={val.sub}>{val.sub}</option>)
                }
            </select>
            <p>Upload Gambar <span className={styles.error}>{imageSizeError}</span></p>
            <input type='file' accept='image/*' onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files != null) {
                    if (e.target.files[0]?.size > 1000000) setImageSizeError('masksimal 1 mb')
                    else {
                        setImageSizeError('')
                        setFile(e.target.files[0])
                        setPicture(URL.createObjectURL(e.target.files[0]))
                    }
                }
            }} />
            {picture ? <Image ref={img} src={picture} alt={getValues('product_name')} width={250} height={250} /> : <IconComponent source={ImgIcon} />}
            <textarea {...register('description', { required: true })} placeholder='Deskripsi*' rows={10}></textarea>
            <button className={styles.submit}>Submit</button>
        </form>
    )
}

export default FormInputProducts