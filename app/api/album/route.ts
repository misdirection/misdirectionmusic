import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    if(id) {
        const album = await prisma?.album.findUniqueOrThrow({
            where: {
            id: id,
        },
        include: {
            Track: true
        },
    })
    return new NextResponse(JSON.stringify( album ),{status:200})
    } else {
    const result = await prisma?.album.findMany()
    return new NextResponse(JSON.stringify( result ),{status:200})
    }
}
