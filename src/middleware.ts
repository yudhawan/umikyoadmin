import { NextResponse } from "next/server";
const allowOrigin = process.env.NODE_ENV === 'production' ? [process.env.BASE_URL, 'https://umikyo.vercel.app/'] : ['http://localhost:3000']
export function middleware(request: Request) {
    const res = NextResponse.next()
    const origin = request.headers.get('origin')
    console.log(origin, allowOrigin)
    if (origin && !allowOrigin.includes(origin)) return new NextResponse(null, {
        status: 400,
        headers: {
            'Content-Type': 'text/plain'
        }
    })
    // add the CORS headers to the response
    // res.headers.append('Access-Control-Allow-Credentials', "true")
    // res.headers.append('Access-Control-Allow-Origin', 'http://localhost:3000') // replace this your actual origin
    // res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
    // res.headers.append(
    //     'Access-Control-Allow-Headers',
    //     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    // )

    return res
}

// specify the path regex to apply the middleware to
export const config = {
    matcher: '/api/:path*',
}