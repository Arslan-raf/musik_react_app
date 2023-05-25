import React from "react";
import Headers from "./components/Header/Header";
import AboutMusikSection from "./components/AboutMusikSection/AboutMusikSection";
import ExploreByCategorySection from "./components/exploreByCategory_section/ExploreByCategorySection"
import SingersSection from "./components/SingersSection/SingersSection"
import EventScheduleSection from "./components/EventScheduleSection/EventScheduleSection";
import ChooseSection from "./components/ChooseSection/ChooseSection";
import SponsorsSection from "./components/SponsorsSection/SponsorsSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import BestShotsSection from "./components/BestShotsSection/BestShotsSection";
import ContactsSection from "./components/contacts_section/ContactsSection";
import Footer from "./components/Footer/Footer";

function App() {


  return (
    <div className="App">
      <Headers></Headers>
      <ExploreByCategorySection></ExploreByCategorySection>
      <AboutMusikSection></AboutMusikSection>
      <SingersSection></SingersSection>
      <EventScheduleSection></EventScheduleSection>
      <ChooseSection></ChooseSection>
      <SponsorsSection></SponsorsSection>
      <TestimonialSection></TestimonialSection>
      <BestShotsSection />
      <ContactsSection />
      <Footer></Footer>
    </div>
  );  
}

export default App;

