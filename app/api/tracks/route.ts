
import prisma from '@/prisma/client'
import { title } from 'process'
import { stringify } from 'querystring'
import { NextResponse } from 'next/server'

type MyType = {
    name: string,
    isAlvie: boolean
}
export async function GET(request: Request) {
const result = await prisma.tracks.findMany()
const type : MyType = { name: "Chris", isAlvie: true}
const json = JSON.stringify(result);
return new Response( json, {status: 200})
}
