import React from "react";
import "./OrderChart.css";
import YellowChart from "../../../../../assets/images/YellowChart.png";
import redArrow from "../../../../../assets/images/redArrow.svg";

function OrderChart() {
    return (
        <div className="order-chart">
            <span className="order-chart__title">Total orders this month</span>
            <div className="order-chart__info">
               <span className="order-chart__info--num">1,850</span>
               <div className="order-chart__data">
                <span className="order-chart__info--proc">-5%</span>
                <img src={redArrow} alt="arrow" />
               </div> 
            </div>
            <img className="order-chart__chart" src={YellowChart} alt="chart" />
        </div>
    );
}

export default OrderChart;