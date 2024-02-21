import React from "react";
// import "./Hotdeal.css";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "../product/Product";
import { productData, responsive } from "../product/data";
// import "bootstrap/dist/css/bootstrap.css";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-multi-carousel";
const Hotdeal = ({ seconds, title, subtitle }) => {
  const product = seconds.map((item) => (
    <Product
      mainBannerId={item.mainBannerId}
      title={item.title}
      subtitle={item.subtitle}
      sort={item.sort}
      pcImageUrl={item.items[0].publication.media[0].uri}
      mobileImageUrl={item.mobileImageUrl}
      linkUrl={item.linkUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      creator={item.creator}
      updater={item.updater}
      deleter={item.deleter}
      createdAt={item.createdAt}
      updatedAt={item.updatedAt}
      deletedAt={item.deletedAt}
      price={item.items[0].publication.priceInfo.price}
      discount={item.items[0].publication.priceInfo.discountRate}
      rate={item.items[0].publication.rating}
    />
  ));
  const columnStyle = {
    width: "20%" /* Set each column to occupy 50% of the page width */,
    display: "inline-block",
    boxSizing:
      "border-box" /* Include padding and border in the element's total width */,
    padding: "20px",
    // border: "1px solid #ccc",
    verticalAlign: "top" /* Align columns at the top of the container */,
  };

  const columnStyles = {
    width: "80%" /* Set each column to occupy 50% of the page width */,
    display: "inline-block",
    boxSizing:
      "border-box" /* Include padding and border in the element's total width */,
    padding: "20px",
    // border: "1px solid #ccc",
    verticalAlign: "top" /* Align columns at the top of the container */,
  };

  return (
    <div>
      <div style={columnStyle}>
        <h4>{title}</h4>
        <h6>{subtitle}</h6>
      </div>
      <div style={columnStyles}>
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>
      </div>
    </div>
  );
  // return (
  //   <div className="App">
  //     <h1>React multi carousel</h1>
  //     <Carousel showDots={true} responsive={responsive}>
  //       {product}
  //     </Carousel>
  //   </div>
  // );
  //   <div class="container">
  //     <div class="column">
  //       <Carousel showDots={false} responsive={responsive}>
  //         {product}
  //       </Carousel>
  //       <h2>Column 1</h2>
  //       <p>This is the content of the first column.</p>
  //     </div>
  //     <div class="column"></div>
  //   </div>
  // );
  // return (

  //   <div className="">
  //     {/* <h1>React multi carousel</h1> */}

  //   </div>
  // );
};

export default Hotdeal;
