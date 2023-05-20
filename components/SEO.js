import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>Urban Rahsoi</title>
      <meta name="description" content="UrbanRahsoi, a modern Indian food blog. Our passion for cooking, combined with our love for Indian cuisine, has inspired us to make new recipes." />
      <meta property="og:title" content="Urban Rahsoi" />
      <meta property="og:description" content="UrbanRahsoi, a modern Indian food blog." />
      
    </Head>
  );
}
