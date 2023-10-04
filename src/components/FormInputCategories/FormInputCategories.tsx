'use client'
import React from 'react'
import styles from './FormInputCategories.module.scss'
import { useForm } from 'react-hook-form'
function FormInputCategories({ addCategoryAndSub, a }: any) {
    const { register, getValues, reset } = useForm()
    console.log(a)
    return (
        <form className={styles.formInput}>
            <input className={styles.input} type='text' {...register('category')} placeholder='Category' />
            <input className={styles.input} type='text' {...register('sub')} placeholder='Sub Category' />
            <input className={styles.submit} type='submit' onClick={e => {
                e.preventDefault()
                addCategoryAndSub({ category: getValues('category'), sub: getValues('sub') })
                reset()
            }} />
        </form>
    )
}

export default FormInputCategories