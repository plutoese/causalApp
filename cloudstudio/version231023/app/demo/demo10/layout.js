import Navigation from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}