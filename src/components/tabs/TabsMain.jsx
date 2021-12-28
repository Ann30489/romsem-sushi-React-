import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SliderNew from "../sliderNew/SliderNew";
import SliderPopular from "../sliderPopular/SliderPopular";

const TabsMain = () => {
  const [key, setKey] = useState("home");

  return (
    <>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Новинки">
          <SliderNew />
        </Tab>
        <Tab eventKey="profile" title="Популярное">
          <SliderPopular />
        </Tab>
      </Tabs>
    </>
  );
};

export default TabsMain;
