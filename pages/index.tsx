import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>

    <h1>Test Next</h1>

    <Link href="/github">GitHub</Link>
    </>  )
}

export default Home
