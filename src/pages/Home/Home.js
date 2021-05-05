import React from "react";
import { PageHeader } from "antd";
import { Slider } from "./Slider";
import HomePage from "./HomePage/HomePage";

export const Home = () => {
  return (
    <div>
      <PageHeader
        style={{
          padding: 0,
          margin: 0,
          height: 40,
          backgroundColor: "transparent",
        }}
      ></PageHeader>
      <Slider />
      <HomePage />
    </div>
  );
};
