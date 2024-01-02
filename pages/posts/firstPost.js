import Link from "next/link"
import Head from "next/head"

const firstPost = () => {
    return (
        <div>
            <Head>
                <title>next.js Blog</title>
            </Head>
            <h1>最初の投稿</h1>
            <Link href="/">ホームへ戻る</Link>
        </div>
    )
}

export default firstPost