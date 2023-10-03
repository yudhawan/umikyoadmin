import React from 'react'
import cx from 'classnames'
import { SellerType } from '@/type'
import styles from './SellersTable.module.scss'
function SellersTable({ sellers }: { sellers: SellerType[] }) {
    const showStatus = (stat: string) => {
        if (stat.includes("DVIP")) return 'Distributor VIP'
        if (stat.includes("DS")) return 'Distributor'
        if (stat.includes("ANV")) return 'Agen'
        if (stat.includes("RNV")) return 'Reseller'
    }
    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tr}>
                    <th className={styles.th}>Nama</th>
                    <th className={styles.th}>Status</th>
                    <th className={styles.th}>Kode Ref</th>
                    <th className={styles.th}>email</th>
                    <th className={styles.th}>Whatsapp</th>
                    <th className={styles.th}>Action</th>
                </tr>
            </thead>
            <tbody>
                {sellers?.map((val: SellerType) => <tr className={styles.tr}>
                    <td className={cx(styles.td)}>{val.nama}</td>
                    <td className={cx(styles.td)}>{showStatus(val.status)} {`(${val.status})`}</td>
                    <td className={cx(styles.td)}>{val.kode_ref}</td>
                    <td className={cx(styles.td)}>{val.email}</td>
                    <td className={cx(styles.td)}><a href='' className={styles.wa}>{val.wa}</a></td>
                    <td className={cx(styles.td)}></td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default SellersTable