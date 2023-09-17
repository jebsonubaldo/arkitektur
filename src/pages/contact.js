import Head from 'next/head'
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>Arkitektur | Contact</title>
      </Head>
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
