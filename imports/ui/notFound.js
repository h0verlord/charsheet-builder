import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not Found</h1>
        <p>Huh, I guess you FUCKED UP somewhere...</p>
        <Link to="/" className="button button--link">Home</Link>
      </div>
    </div>
  );
};
