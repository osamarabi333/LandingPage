import React from "react";
import MainSection from "../MainSection/MainSection";
import DetailSection from "../DetailsSection/DetailSection";
import CardsSection from "../CardsSection/CardsSection";
import AboutSection from "../AboutSection/AboutSection";
import ContactUs from "../ContactUs/ContactUs";

export default function Home() {
  return (
    <>
      <MainSection />
      <DetailSection />
      <CardsSection />
      <AboutSection />
      <ContactUs/>
    </>
  );
}
