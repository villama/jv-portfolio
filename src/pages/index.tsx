import Head from 'next/head'
import Static from 'src/components/Static'

function IndexPage() {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='Julius | Developer'
          content='Julius Villamayor'
        />
        <title>Julius | Developer</title>
      </Head>
      <Static />
      <div className='flex justify-center items-center h-screen font-semibold text-gray-900' style={{ fontSize: 'calc(3vw + 3vh + 1.5vmin)' }}>
        Julius Villamayor
      </div>
    </div>
  )
}

export default IndexPage
