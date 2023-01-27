import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/header'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram, BsGithub, BsWhatsapp} from 'react-icons/bs'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Erick Almeida</title>
        <meta name="description" content="Desenvolvedor FullStack" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header/>
        <div className={styles.containerBackground}>
          <h1 className={styles.tituloNome}>ERICK ALMEIDA</h1>
          <h2 className={styles.profissao}>Desenvolvedor Fullstack |</h2>
          <div className={styles.redesSociais}>
            <Link href={'https://www.facebook.com/blackerick/'} className={styles.iconSocialMidia}>
              <FaFacebookF  className={styles.icon}/>
            </Link>
            <Link href={'https://www.instagram.com/erickeira/'} className={styles.iconSocialMidia}>
              <BsInstagram  className={styles.icon}/>
            </Link>
            <Link href={'https://github.com/erickeira'} className={styles.iconSocialMidia}>
              <BsGithub  className={styles.icon}/>
            </Link>
            <Link href={'https://api.whatsapp.com/send?phone=5567981956332'} className={styles.iconSocialMidia}>
              <BsWhatsapp className={styles.icon}/>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
