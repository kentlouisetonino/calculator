import Head from 'next/head'

interface Props {
  title: string
}

export default function Header({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/head.ico"></link>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
  )
}
