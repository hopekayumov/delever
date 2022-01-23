import React from "react";
import "./OrderChart.css";
import redArrow from "../../../../../assets/images/redArrow.svg";

function OrderChart({title, numbers, image}) {
    return (
        <div className="order-chart">
            <span className="order-chart__title">{title}</span>
            <div className="order-chart__info">
               <span className="order-chart__info--num">{numbers}</span>
               <div className="order-chart__data">
                <span className="order-chart__info--proc">-5%</span>
                <img src={redArrow} alt="arrow" />
               </div> 
            </div>
            <img className="order-chart__chart" src={image} alt="chart" />
        </div>
    );
}

export default OrderChart;