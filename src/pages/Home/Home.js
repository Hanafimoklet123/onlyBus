import React from "react";
import { PageHeader } from "antd";

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
        title={"Home"}
      ></PageHeader>
      Ini adalah page Home !!
    </div>
  );
};
