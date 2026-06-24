import React from "react";
import { Routes } from "react-router-dom";
import Navbar from './components/Layout/Navbar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Blog from './pages/Blog/Blog';
import Testimonials from './pages/Testimonials/Testimonials';
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Book_Appointment from './pages/Book_Appointment/Book_Appointment';
import { Route } from "react-router-dom";
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Footer from "./components/Layout/Footer";
import BlogPost from "./pages/Blog/Blogposts/blogpost_1";
import TermsAndCondition from './pages/TermsAndCondition/TermsandCondition';

function App() {
  return (
    <>
      <Navbar />

      <main className="w-full pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/termsandcondition" element={<TermsAndCondition />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
           <Route path="/blogpost1" element={<BlogPost />} />
          <Route path="/book_appointment" element={<Book_Appointment />} />
        </Routes> 
      </main>

      <Footer />
    </>
  );
}

export default App;