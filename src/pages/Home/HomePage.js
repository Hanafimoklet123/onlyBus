import React from "react";
import bis1 from "../../img/europeroad.jpg";
import bis2 from "../../img/bis-pantura.jpg";
import "./HomePage.css";

export const HomePage = () => {
  const images = [
    {
      key: 1,
      image: bis1,
    },
    {
      key: 2,
      image: bis2,
    },
  ];

  return (
    <div>
      <p className="tag"> Tentang Tentang</p>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3 className="mb-5">
            <span className="bg-warning text-white p-2">Section Title</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eligendi obcaecati facere itaque, veritatis amet voluptatem ab, vero quos a ad eaque minus architecto sit sapiente, commodi inventore doloribus accusantium alias
            corporis neque odio reprehenderit.
          </p>
        </div>
        <div className="col-sm-5">
          <img className="img-fluid" src={bis1} alt="" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md pl-5 pr-0">
          <img className="img-fluid" src={bis2} alt="" style={{ height: "300px", width: "auto", marginTop: "40px" }} />
        </div>
        <div className="col-md-7">
          <h3 className="mb-4 " style={{ marginTop: "100px"}}>
            <span className="bg-primary text-white p-2">Section Title</span>
          </h3>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eligendi obcaecati facere itaque, veritatis amet voluptatem ab, vero quos a ad eaque minus architecto sit sapiente, commodi inventore doloribus accusantium alias
            corporis neque odio reprehenderit.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3 className="mb-5">
            <span className="bg-warning text-white p-2">Section Title</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe eligendi obcaecati facere itaque, veritatis amet voluptatem ab, vero quos a ad eaque minus architecto sit sapiente, commodi inventore doloribus accusantium alias
            corporis neque odio reprehenderit.
          </p>
        </div>
        <div className="col-sm-5">
          <img className="img-fluid" src={bis1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
