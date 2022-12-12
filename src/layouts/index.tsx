import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

interface Props {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title && title}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="app">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

Layout.defaultProps = {
    title: 'Airbnb'
}
