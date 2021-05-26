import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
export default () => {
    return(
        <Layout>
            <Head>
                <title>와 타이틀이다</title>
            </Head>
            <div>
                <h2>
                    <Link href="/">
                        <a>back</a>
                    </Link>
                </h2>
            </div>
        </Layout>
    )
}