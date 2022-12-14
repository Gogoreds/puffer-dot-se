import React from "react";
import Head from "next/head";
import Link from "next/link";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { Services } from "../components/Services";
import { Footer } from "../components/Footer";
import { Stats } from "../components/Stats";
import { Pricing } from "../components/Pricing";
import { Customers } from "../components/Customers";
import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <div className="h-screen bg-[#212240]">
      <Head>
        <title>Puffer - Invest in your future today!</title>
        <meta
          name="description"
          content="We strive to provide the best internet technologies for free."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <Pricing />
        <Stats />
        <Testimonials />
        <Customers />
      </main>
      <Footer />
    </div>
  );
}
