import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import House from "./pages/House";
import Bespoke from "./pages/Bespoke";
import Departments from "./pages/Departments";
import Department from "./pages/Department";
import Collections from "./pages/Collections";
import Collection from "./pages/Collection";
import Partnerships from "./pages/Partnerships";
import Appointments from "./pages/Appointments";
import Care from "./pages/Care";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* The house */}
          <Route index element={<Home />} />
          <Route path="house" element={<House />} />
          <Route path="departments" element={<Departments />} />
          <Route path="departments/:slug" element={<Department />} />
          <Route path="collections" element={<Collections />} />
          <Route path="collections/:slug" element={<Collection />} />
          <Route path="bespoke" element={<Bespoke />} />
          <Route path="partnerships" element={<Partnerships />} />
          <Route path="appointments" element={<Appointments />} />

          {/* Client care */}
          <Route path="care/:slug" element={<Care />} />

          {/* Commerce (Phase 6) */}
          <Route path="shop" element={<Placeholder title="Shop" />} />
          <Route path="shop/:category" element={<Placeholder title="Shop" />} />
          <Route path="product/:slug" element={<Placeholder title="Product" />} />
          <Route path="search" element={<Placeholder title="Search" />} />
          <Route path="cart" element={<Placeholder title="Your Bag" />} />
          <Route path="checkout" element={<Placeholder title="Checkout" />} />
          <Route path="account" element={<Placeholder title="Your Account" />} />
          <Route path="wishlist" element={<Placeholder title="Wishlist" />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}