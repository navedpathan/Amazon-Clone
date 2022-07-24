import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductFeed from '../components/ProductFeed';
import { getSession } from 'next-auth/react';

export default function Home({ products }) {
  return (
    <div className='bg-gray-100'>
      <Head>
        <title>Online Shopping site in India: Buy mobiles, laptops, cameras, books,  electronics, furniture, grocery, lifestyle &amp; More. Best Offers!</title>
        <meta name="description" content="Amazon clone by NextJS" />
        <link rel="icon" href="/favicon.ico" />

        {/* tailwindcss link */}
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </Head>

      <Header />

      <main className='max-w-screen-2xl mx-auto'>
        <Banner />

        <ProductFeed products={products}/>
      </main>

    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json() 
  );

  return {
    props: {
      products,
      session
    }
  }
}

// GET >>> https://fakestoreapi.com/products
