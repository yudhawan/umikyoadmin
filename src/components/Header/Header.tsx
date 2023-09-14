"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cx from 'classnames'
import styles from './Header.module.scss'
const Header = () => {
    const pathname = usePathname()
    return (
        <header className={styles.main}>
            <Link className={cx(styles.list, { [styles.active]: pathname === '/' })} href={'/'}>Banners</Link>
            <Link className={cx(styles.list, { [styles.active]: pathname === '/products' })} href={'/products'}>Products</Link>
            <Link className={cx(styles.list, { [styles.active]: pathname === '/sellers' })} href={'/sellers'}>Sellers</Link>
            <Link className={cx(styles.list, { [styles.active]: pathname === '/order' })} href={'/order'}>Order</Link>
            <Link className={cx(styles.list, { [styles.active]: pathname === '/setting' })} href={'/'}>Setting</Link>
        </header>
    )
}

export default Header