import React from "react";
import * as Icon from "react-bootstrap-icons";

const HeaderConfigureArea = () => {
  return (
    <>
      <div className="header-configure-area">
        <ul className="nav justify-content-end">
          <li className="user-hover">
            <a href="#">
            <Icon.Person size={22}/>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="#">login</a>
              </li>
              <li>
                <a href="#">register</a>
              </li>
              <li>
                <a href="#">my account</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <Icon.Heart size={22}/>
            </a>
          </li>
          <li>
            <a href="#" className="minicart-btn">
            <Icon.Bag size={22}/>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderConfigureArea;
