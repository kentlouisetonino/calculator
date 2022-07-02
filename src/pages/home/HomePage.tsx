import Head from "next/head"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Calculator</title>
        <link rel='icon' href='/head.ico'></link>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
      </Head>
      <button>Record Video</button>
    </>
  )
}

export default HomePage
