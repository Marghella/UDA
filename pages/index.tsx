import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Disambiguos() {
  return (<>
    <Head>
      <title>Il mondo che vorrei</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Link href={'/vonazzo'}><button>Vonazzo</button></Link>
      <Link href={'/marghella'}><button>Marghella</button></Link>
    </div>
  </>);
}
