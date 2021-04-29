import { Carousel } from "antd";
import slide1 from "../../img/busjauh.jpg";
import slide2 from "../../img/alone-road-sun.jpg";
import slide3 from "../../img/terminal-bus.jpg";

export const Slider = () => {
  const sliders = [
    {
      key: 1,
      image: slide1,
      text: "Selamat Datang!",
      subtext: "-John Paul Friedrich Richter-",
      active: true,
    },
    {
      key: 2,
      image: slide2,
      text: "“Bis pantura memiliki ciri khas yaitu blablablablabla”",
      subtext: "-John Paul Friedrich Richter-",
    },
    // {
    //   key: 3,
    //   image: slide3,
    //   text: "“Bis pantura memiliki ciri khas yaitu blablablablabla”",
    //   subtext: "-John Paul Friedrich Richter-",
    // },
  ];

  return (
    <div className="row">
      <div className="col-md-9">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="1" aria-label="Slide-1"></button>
            {/* <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
          </div>
          <div className="carousel-inner">
            {sliders.map((slide) => {
              const isDataActive = slide.active ? "active" : "";
              return (
                <div className={"carousel-item " + isDataActive} key={slide.key}>
                  <img src={slide.image} class="d-block w-100" alt="..."></img>
                  <div className="carousel-caption d-md-block bg-warning">
                    <h5>{slide.text}</h5>
                    <p>{slide.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
