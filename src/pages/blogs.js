import Head from 'next/head'
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Blogs from "@/components/Blogs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>Arkitektur | Blogs</title>
      </Head>
      <Navbar />
      <Blogs />
      <CTA />
      <Footer />
    </div>
  );
}
