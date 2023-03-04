
import prisma from '@/prisma/client'
import { NextResponse, type NextRequest } from 'next/server'


export async function GET(request: NextRequest) {
const result = await prisma?.track.findMany()
return NextResponse.json(result)
}
