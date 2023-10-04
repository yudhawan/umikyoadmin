import { revalidateTag } from 'next/cache'
import FormInputCategories from '@/components/FormInputCategories/FormInputCategories'
import CategoryTag from '@/components/CategoryTag/CategoryTag'
import styles from './categories.module.scss'

async function getCategoriesAndSub() {
    try {
        const res = await fetch(process.env.BASE_URL + '/api/getCategories', { next: { tags: ["deleteCategory", "postCategory"] } })
        if (!res.ok) return []
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
async function deleteCategories(id: string, type: string) {
    'use server'
    try {
        const res = await fetch(process.env.BASE_URL + '/api/deleteCategory', {
            method: 'post',
            body: JSON.stringify({ id, type })
        })
        revalidateTag('deleteCategory')

    } catch (error) {
        console.log(error)
    }
}
const addCategoryAndSub = async ({ category, sub }: { category: string, sub: string }) => {
    'use server'
    try {
        const res = await fetch(process.env.BASE_URL + '/api/addCategory', {
            method: 'post',
            body: JSON.stringify({ category, sub }),
        })
        revalidateTag('postCategory')

    } catch (error) {
        console.log(error)
    }
}
export default async function Categories() {
    const data = await getCategoriesAndSub()
    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Add Categories/Sub</h1>
            <FormInputCategories addCategoryAndSub={addCategoryAndSub} />
            <div className={styles.container}>
                <h1 className={styles.title}>Categories</h1>
                <div className={styles.tagContainer}>
                    {
                        data?.categories?.length ? data?.categories?.map((val: { id: string, category: string }) => <CategoryTag key={val.id} id={val.id} category={val.category} deleteFn={deleteCategories} type='category' />) : <>empty</>
                    }
                </div>
            </div>
            <div className={styles.container}>
                <h1 className={styles.title}>Sub Categories</h1>
                <div className={styles.tagContainer}>
                    {
                        data?.sub?.length ? data?.sub?.map((val: { id: string, sub: string }) => <CategoryTag key={val.id} id={val.id} category={val.sub} type='sub' deleteFn={deleteCategories} />) : <>empty</>
                    }
                </div>
            </div>
        </div>
    )
}
