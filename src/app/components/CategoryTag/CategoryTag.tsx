'use client'
import IconComponent from '../Icon/Icon'
import XIcon from '../../../icons/x.svg'
import styles from './CategoryTag.module.scss'
function CategoryTag({ id, category, type, deleteFn }: { id: string, category: string, type?: string, deleteFn?: (id: string, type: string) => Promise<void> }) {
    return (
        // @ts-ignore
        <div className={styles.tag}><span>{category}</span><button onClick={() => deleteFn(id, type)} className={styles.removeButton}><IconComponent source={XIcon} classname={styles.icon} /></button></div>
    )
}

export default CategoryTag