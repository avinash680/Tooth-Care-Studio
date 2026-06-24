import React from "react";
import Hero from "./Hero";
import ClinicEquipment from "./ClinicsEquipped";
import ChooseUs from './ChooseUs'
import Dentalex from './Dentalex'
import Testimoenials from "./Testimoenials";
import BeforeAfter from "./BeforeAfter";

const Home = () => {
  return (
    <>
      <Hero />
      <ClinicEquipment />
      <ChooseUs />
      <Dentalex />
      <Testimoenials />
      <BeforeAfter />
    </>
  );
};

export default Home;
