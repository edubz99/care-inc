import Layout from "@/components/layout/Layout";
import About from "@/components/sections/home/About";
import Banner from "@/components/sections/home/Banner";
import Contact from "@/components/sections/home/Contact";
import Service from "@/components/sections/home/Service";
import Chooseus from "@/components/sections/home/Chooseus";
import Testimonial from "@/components/sections/home/Testimonial";
import Services from "@/components/sections/home/Services";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Service />
        <About />
        <Chooseus />
        <Services />
        <Testimonial />
        <Contact />
      </Layout>
    </>
  );
}
