import React from "react";
import Banner from "../../components/banner/Banner";
import ContactsSm from "../../components/contactsSm/ContactsSm";
import Gallery from "../../components/gallery/Gallery";
import Presentation from "../../components/presentation/Presentation";
import Text from "../../components/text/Text";

const MainPage = () => {
  return (
    <>
      <Banner />
      <Gallery />
      <Presentation />
      <Text />
      <ContactsSm />
    </>
  );
};

export default MainPage;
