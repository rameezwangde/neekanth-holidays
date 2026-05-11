import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
