'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import ImageIcon from '../../icons/image.svg'
import styles from './FormInputImage.module.scss'
type Inputimage = { page: string }
const FormInputImage = () => {
    const img = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<any>()
    const { register, getValues } = useForm()
    const uploadImageServices = async ({ page, file }: { page: string, file: File | Blob }) => {
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
    return (
        <div className={styles.main}>
            <form className={styles.container}>
                <div className={styles.inputContainer}>
                    <label className={styles.label} htmlFor="pilih">Pilih Halaman</label>
                    <select className={styles.optionContainer} {...register('page', { required: true })} id="pilih">
                        <option value='home'>home</option>
                        <option value='seller'>seller</option>
                    </select>
                </div>
                {/* <button className={styles.addimage} onClick={() => img.current?.click()}>
                    <IconComponent source={ImageIcon} />
                </button> */}
                <input ref={img} type='file' accept="image/png, image/gif, image/jpeg" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.files != null) setFile(e.target.files[0])
                }} />
                <input className={styles.submit} type='submit' onClick={e => {
                    e.preventDefault()
                    uploadImageServices({ page: getValues('page'), file: file })
                }} />
            </form>
        </div>
    )
}

export default FormInputImage