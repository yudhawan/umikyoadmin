'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import ImageIcon from '../../icons/image.svg'
import styles from './FormInputImage.module.scss'
import Image from 'next/image'
import IconComponent from '../Icon/Icon'
import uploadImageServices from '@/lib/uploadImageServices'
type Inputimage = { page: string }
const FormInputImage = () => {
    const img = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File | null>(null)
    const { register, handleSubmit, getValues } = useForm()

    const submit = async ({ page }: Inputimage) => {
        // console.log(file)
        let formdata: any = new FormData()
        formdata.append('image', file)
        const a = await fetch('/api/uploadImage', {
            method: 'post',
            body: JSON.stringify({ image: file, directory: page }),
        })
        console.log(a)
    }

    return (
        <div className={styles.main}>
            <form className={styles.container}>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="pilih">Pilih Halaman</label>
                    <select className={styles.optionContainer} {...register('page', { required: true })} id="pilih">
                        <option value='home'>home</option>
                        <option value='seller'>seller</option>
                    </select>
                    {/* <div>
                        <input id='home'  {...register('home', { required: true })} name='input' />
                    </div>
                    <div>
                        <input id='seller'  {...register('seller', { required: true })} name='input' />
                        <label className={styles.label} htmlFor="seller">Seller</label>
                    </div> */}
                </div>
                <button className={styles.addimage} onClick={() => img.current?.click()}>
                    <IconComponent source={ImageIcon} />
                </button>
                <input className={styles.submit} type='submit' onClick={e => {
                    e.preventDefault()
                    // @ts-ignore
                    uploadImageServices({ page: getValues('page'), file: file })
                }} />
            </form>
            <input ref={img} type='file' accept="image/png, image/gif, image/jpeg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                console.log(e.target.files)
                if (e.target.files != null) setFile(e.target.files[0])
            }} />
        </div>
    )
}

export default FormInputImage