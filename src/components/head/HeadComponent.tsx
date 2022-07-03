import Head from 'next/head'

const HeadComponent = (props: any) => {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel='icon' href='/head.ico'></link>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1'
      />
    </Head>
  )
}

export default HeadComponent
