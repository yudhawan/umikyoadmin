import FormInputImage from '@/components/FormInputImage/FormInputImage'
import ImageSlideContainer from '@/components/ImageSlideContainer/ImageSlideContainer'
import styles from './page.module.scss'

async function getImage(page: string) {
  const res = await fetch(process.env.BASE_URL + '/api/getImagesByPage?page=' + page)
  if (!res.ok) return []
  return res.json()
}
async function postImage(url: string) {
  // 'use server'
}
export default async function Home() {
  const homeBanners = await getImage('home')
  return (
    <main className={styles.main}>
      <span className={styles.title}>Banners</span>
      <FormInputImage />
      <div className={styles.bannerShowContainer}>
        <span>Homepage</span>
        <ImageSlideContainer images={homeBanners} />
      </div>
      <div className={styles.bannerShowContainer}>
        <span>Sellers</span>
        <div className={styles.imageContainer}></div>
      </div>
    </main>
  )
}
