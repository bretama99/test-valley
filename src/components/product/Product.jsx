import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import star from "./star-darkgray.svg";

export default function Product(props) {
  return (
    <div className="card">
      <img
        className="product--image"
        src={props.pcImageUrl}
        alt="product image"
      />
      <h6>{props.title}</h6>
      <h6>{props.subtitle}</h6>
      <h6 className="flexCenter">
        <p style={{ color: "red" }}>
          {props.discount > 0 ? props.discount : 100}%
        </p>
        {props.price}
      </h6>
      <h6 className="flexCenter">
        <img src={star} alt="별점" width="12px" height="12px" />
        {props.rate}
      </h6>

      {/* <h6 className="price">{props.sort}</h6> */}
      {/* <p>{props.description}</p> */}
      {/* <p>
        <button>Add to Cart</button>
      </p> */}
    </div>
  );
}
