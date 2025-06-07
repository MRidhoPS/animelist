import Image from "next/image";
import HomePage from "./home/page";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Main() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
