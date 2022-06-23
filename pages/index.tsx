import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: Tweet[]
}

const Home = ({ tweets }: Props) => {

  return (
    <div className="lg:max-w-5xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter-Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>
        {/* sidbar */}
        <Sidebar />

        {/* feed */}
        <Feed tweets={tweets} />

        {/* widgets */}
        <Widgets />
      </main>

    </div>
  )
}

export default Home

// SSR: Server Side Rendring
export const getServerSideProps: GetServerSideProps = async (context) => {

  // this Called API route used to fetch some data from Sanity CMS, and that API route is then called directly from getServerSideProps
  const tweets = await fetchTweets();

  return {
    props: { // will be passed to the page component as props
      // i can now savely return tweets from my page
      tweets,
    }
  }
}
