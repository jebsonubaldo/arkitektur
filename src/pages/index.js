import Head from 'next/head'
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className}`}>
      <Head>
        <title>Arkitektur | Homepage</title>
      </Head>
      <Navbar />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}
