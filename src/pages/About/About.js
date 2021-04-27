import React from "react";
import { PageHeader } from "antd";

export const About = () => {
  return (
    <div>
      <PageHeader
        style={{
          padding: 0,
          margin: 0,
          height: 40,
          backgroundColor: "transparent",
        }}
        title={"About"}
      ></PageHeader>
      Ini adalah halaman About !!!
    </div>
  );
};
