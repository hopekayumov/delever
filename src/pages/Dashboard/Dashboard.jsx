import React from "react";
import "./Dashboard.css";
// Components
import Sidebar from "../../layouts/Sidebar/Sidebar";
import Navbar from "../../layouts/Navbar/Navbar";
import Sidenav from "../../components/Sidenav/Sidenav";
import Info from "../../components/Dashboard/Content/Info/Info";
// Nav Icons
import { ReactComponent as Users } from "../../assets/images/users.svg";
import { ReactComponent as Analytics } from "../../assets/images/analytics.svg";
import { ReactComponent as Shopping } from "../../assets/images/shopping.svg";
import { ReactComponent as Assignment } from "../../assets/images/assignment.svg";
import { ReactComponent as Store } from "../../assets/images/store.svg";
import { ReactComponent as Group } from "../../assets/images/Group.svg";
import { ReactComponent as History } from "../../assets/images/history.svg";
import { ReactComponent as Settings } from "../../assets/images/settings.svg";
// Info icons
import InfoShop from "../../assets/images/Shop.svg";
import InfoUsers from "../../assets/images/InfoUsers.svg";
import InfoNotification from "../../assets/images/Infonotifications.svg";
import InfoCar from "../../assets/images/InfoCar.svg";
import OrderChart from "../../components/Dashboard/Content/SmallCharts/OrdersChart/OrderChart";
// Chart icons
import YellowChart from "../../assets/images/YellowChart.png";
import PurpleChart from "../../assets/images/PurpleChart.png";
import RedChart from "../../assets/images/RedChart.png";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar>
        {/* Navlink */}
        <Sidenav image={Analytics} path="analytics">
          <Analytics className="sidebar__nav--img" alt="analytics" />
        </Sidenav>
        <Sidenav image={Users} path="users">
          <Users className="sidebar__nav--img" alt="users" />
        </Sidenav>
        <Sidenav image={Shopping} path="shopping">
          <Shopping className="sidebar__nav--img" alt="shopping" />
        </Sidenav>
        <Sidenav image={Assignment} path="assignment">
          <Assignment className="sidebar__nav--img" alt="assignment" />
        </Sidenav>
        <Sidenav image={Store} path="store">
          <Store className="sidebar__nav--img" alt="store" />
        </Sidenav>
        <Sidenav image={Group} path="group">
          <Group className="sidebar__nav--img" alt="group" />
        </Sidenav>
        <Sidenav image={History} path="history">
          <History className="sidebar__nav--img" alt="history" />
        </Sidenav>
        <Sidenav image={Settings} path="settings">
          <Settings className="sidebar__nav--img" alt="settings" />
        </Sidenav>
      </Sidebar>
      {/* Content */}
      <div className="content">
        {/* Navbar */}
        <Navbar>Dashboard</Navbar>
        {/* Body */}
        <div className="content__body">
          {/* List */}
          <ul className="content__infos--list">
            <li className="content__infos--item">
              <Info number="24" name="Филиалы" icon={InfoShop} />
            </li>
            <li className="content__infos--item">
              <Info number="110,823" name="Клиенты" icon={InfoUsers} />
            </li>
            <li className="content__infos--item">
              <Info
                number="110,823"
                name="Подписчики"
                icon={InfoNotification}
              />
            </li>
            <li className="content__infos--item">
              <Info number="75" name="Курьеры" icon={InfoCar} />
            </li>
          </ul>
          <div className="content__small-charts">
            <ul className="content__small-charts__list">
              <li className="content__small-charts__item">
                <OrderChart
                  title="Total orders this month"
                  numbers="1,850"
                  image={YellowChart}
                />
              </li>
              <li className="content__small-charts__item">
                <OrderChart
                  title="Earning this month"
                  numbers="$6,250"
                  image={PurpleChart}
                />
              </li>
              <li className="content__small-charts__item">
                <OrderChart
                  title="Total orders this month"
                  numbers="$12,750"
                  image={RedChart}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
