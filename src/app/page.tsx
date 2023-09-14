import Image from 'next/image'
import styles from './page.module.scss'
import FormInputImage from '@/components/FormInputImage/FormInputImage'

async function getImage(url: string) {

}
async function postImage(url: string) {
  // 'use server'
}
export default function Home() {
  return (
    <main className={styles.main}>
      <span className={styles.title}>Banners</span>
      <FormInputImage />
      <div className={styles.bannerShowContainer}>
        <span>Homepage</span>
        <div className={styles.imageContainer}></div>
      </div>
      <div className={styles.bannerShowContainer}>
        <span>Sellers</span>
        <div className={styles.imageContainer}></div>
      </div>
    </main>
  )
}
