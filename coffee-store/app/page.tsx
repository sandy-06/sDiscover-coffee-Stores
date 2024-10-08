 'use client'
import Banner from "@/components/banner.client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const coffeeStoreId =   'dark-horse-coffee';
  return (
  <div className='mb-56'>
    <main className="flex min-h-screen flex-col items-center justify-between p-14" >
      <Banner />
      <Link href={`/coffee-store/${coffeeStoreId}`}>Dark Horse coffee</Link>
    </main>
  </div>
  );
}