import React from "react";
import "./menu-item.scss";
import { Link, withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => {

  return (
    // im case of Router, props contains 3 additional properties history, match and location

    // withRouter is HOC(Higher order component)
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      {/* <Link className="linkMenu" to="/hats"> */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default withRouter(MenuItem);
