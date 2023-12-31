import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch("/api/avo")
      .then((res) => res.json())
      .then(({ data, length }) => setProductList(data));
  }, []);

  return (
    <>
      <Head>
        <title>Perros</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {productList &&
        productList.map((product) => {
          return <div key={product.id}>{product.name}</div>;
        })}
    </>
  );
}
