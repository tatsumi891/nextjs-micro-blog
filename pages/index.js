import Head from "next/head";
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Layout, { siteTitle } from '@/components/Layout'
import utilStyles from '../styles/utils.module.css'
import {getPostsData} from '../lib/post'

export async function getStaticProps() {
  const allPostsData = getPostsData();

  return {
    props: {
      allPostsData,
    }
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head><title>{siteTitle}</title></Head>
      <section>
        <p className={utilStyles.headingMd}>フルスタックエンジニアまでもう少しです</p>
      </section>

      <section>
        <h2>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
            <Link href={`/posts/${id}`}>
              <img src={thumbnail} className={styles.thumbnailImage}/>
            </Link>
            <Link href={`/posts/${id}`} legacyBehavior>
              <a className={utilStyles.boldText}>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>{date}</small>
          </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
