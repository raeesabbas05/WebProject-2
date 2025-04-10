import AboutUs from "../../components/AboutUs";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
import { Content } from "./Content";

export default function HomePage() {
  return (
    <>
      <Header />
      <Content />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  );
}
