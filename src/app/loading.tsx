import React from 'react'
import styles from './page.module.scss'
import Image from 'next/image'
function Loading() {
    return (
        <div className={styles.loading}>
            <Image src={'/loader.gif'} alt='loading' width={300} height={300} />
        </div>
    )
}

export default Loading