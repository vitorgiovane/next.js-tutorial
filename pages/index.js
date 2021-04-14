import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello! I'm <b>Vitor</b>. I'm a software enginer. You can contact me on
        {' '}
          <a href='https://linkedin.com/in/vitorgiovane' target='_blank'>LinkedIn</a> and
        {' '}
          <a href='https://github.com/vitorgiovane' target='_blank'>Github</a>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <br />
      <h2>
        <Link href='/posts/first-post'>
          <a>See my first post!</a>
        </Link>
      </h2>
    </Layout>
  )
}
