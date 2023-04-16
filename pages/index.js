import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Codewear.com - Wear the code</title>
        <meta name="description" content="CodesWear.com - wear the code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='mx-4 my-3  py-4 bg-purple-200 text-center' >Sayad ek din honge, try at your best</h1>
    </>
  )
}
