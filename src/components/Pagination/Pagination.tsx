'use client'
import React from 'react'
import cx from 'classnames'
import { maxNumberSeller } from '@/constant/sellersMaxResult'
import styles from './Pagination.module.scss'
const Pagination = ({ amount, page, getData }: { amount: number, page: number, getData: (page: number) => void }) => {
    const numberOfPages = Math.ceil(amount / maxNumberSeller)
    const pages = []
    for (let i = 1; i < numberOfPages; i++) pages.push(i)
    return (
        <div className={styles.main}>{pages?.map(val => {
            return <button onClick={() => getData(val)} key={val} className={cx(styles.page, { [styles.pageActive]: page === val })}>{val}</button>
        })}</div>
    )
}

export default Pagination