import Link from "next/link";
import Header from "./header/page";
import Body from "./components/body";
import Footer from "./footer/page";

export default function Home() {
  return (
    <main>
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
