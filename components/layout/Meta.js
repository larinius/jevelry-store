import React, { Fragment } from 'react';
import Head from 'next/head'


function Meta({ title, keywords, description }) {
  return (
    <Fragment>
    <Head>
      <meta charSet="utf-8" />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/static/favicon.ico' type="image/png" />
      <title>{title}</title>
    </Head>
  </Fragment>
  )
}

Meta.defaultProps = {
  title: 'Jewelry Store',  
  description: 'Buy gold jewelry online. Best prices. High quality.',
}


export default Meta