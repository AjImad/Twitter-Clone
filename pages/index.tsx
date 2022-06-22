import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Twitter-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* sidbar */}
        <Sidebar />

        {/* feed */}
        <Feed />

        {/* widgets */}
        <Widgets />
      </main>

    </div>
  )
}

export default Home
