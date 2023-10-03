export type formImage = {
    action: (url: string) => Promise<void>
}
export type BannersProp = {
    id: string,
    image: string,
    dir: string,
    attribute?: Object | null
}


export type CategoriesProp = {
    id: string, category: string
}
export type SubProp = {
    id: string, sub: string
}
export type ProductProp = {
    id?: string,
    product_name: string,
    quantity: number,
    price: number,
    category: string,
    sub?: string,
    images?: string,
    description: string
}
export type SellerType = {
    alamat_lengkap: string,
    date?: string,
    email: string,
    fb: string,
    id: number,
    ig: string,
    kode_ref: string,
    kota: string,
    nama: string,
    nama_lengkap: string,
    picture: string | null,
    shoope: string,
    status: string,
    ttl?: string,
    verification: number,
    wa: string,
    wilayah: string
}