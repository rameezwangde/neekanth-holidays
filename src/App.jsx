import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import DestinationDetail from "./pages/DestinationDetail.jsx";
import GroupTours from "./pages/GroupTours.jsx";
import VisaAssistance from "./pages/VisaAssistance.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import { domesticTours, honeymoonTours, internationalTours } from "./data/travelData.js";

export default function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route
            path="/domestic"
            element={
              <ListingPage
                title="Domestic Tours"
                eyebrow="India, beautifully arranged"
                description="From Kashmir's alpine calm to Goa's coastline and Kerala's backwaters, discover India through thoughtful itineraries and seamless planning."
                packages={domesticTours}
                image="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1800&q=85"
              />
            }
          />
          <Route
            path="/international"
            element={
              <ListingPage
                title="International Tours"
                eyebrow="Across borders, without friction"
                description="Premium international holidays across islands, skylines, heritage cities, and cultural escapes with curated stays and guided experiences."
                packages={internationalTours}
                image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=85"
              />
            }
          />
          <Route
            path="/honeymoon"
            element={
              <ListingPage
                title="Honeymoon Packages"
                eyebrow="Romantic escapes"
                description="Island villas, slow sunsets, candle-lit dinners, and beautifully paced journeys for couples beginning a new chapter."
                packages={honeymoonTours}
                image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=85"
                romantic
              />
            }
          />
          <Route path="/group-tours" element={<GroupTours />} />
          <Route path="/visa-assistance" element={<VisaAssistance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
