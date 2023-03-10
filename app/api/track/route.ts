
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'


export async function GET(request: NextRequest) {
const result = await prisma?.track.findMany({
    select:{
        title: true,
        artist: true,
        src: true,
        duration: true,
        album: {
            select:{
                title: true
            }
        }
    }
})
return new NextResponse(JSON.stringify(result),{status:200})
}
