'use client'
import React from 'react'
import styles from './FormInputCategories.module.scss'
import { useForm } from 'react-hook-form'
function FormInputCategories({ addCategoryAndSub }: any) {
    const { register, getValues, reset } = useForm()
    const add = async ({ category, sub }: { category: string, sub: string }) => {

        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/addCategory', {
            method: 'post',
            body: JSON.stringify({ category, sub }),
        })
        // revalidateTag('postCategory')

    }
    return (
        <form className={styles.formInput}>
            <input className={styles.input} type='text' {...register('category')} placeholder='Category' />
            <input className={styles.input} type='text' {...register('sub')} placeholder='Sub Category' />
            <input className={styles.submit} type='submit' onClick={e => {
                e.preventDefault()
                add({ category: getValues('category'), sub: getValues('sub') })
                reset()
            }} />
        </form>
    )
}

export default FormInputCategories