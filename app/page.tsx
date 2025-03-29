import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Linsma-Impact | Empower Today</title>
      </Head>
      <Navbar />
      <header className="hero">
        <h1>Welcome to Linsma-Impact</h1>
        <p>Empowering today for a better tomorrow</p>
        <Link href="/about">
          <button>Learn More</button>
        </Link>
      </header>
      <Footer />
    </div>
  );
}
