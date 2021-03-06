import Head from "next/head";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Shoe Store</title>
        <link rel="icon" href="/shoe.ico" />
      </Head>
      <img
        alt="Shoe Background"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
        src="/background.jpg"
      />
      <ImageSlider />
      <Blog />
      <Footer />
    </div>
  );
}
