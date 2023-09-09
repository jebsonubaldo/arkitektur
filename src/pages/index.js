import Image from "next/image";
import { Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Testimonilas from "@/components/Testimonials";
import Process from "@/components/Process";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      <Process />
      <Testimonilas />
      <Footer />
    </div>
  );
}
