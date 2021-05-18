import React from "react";
import './style.css'

function Card({ icon, title, children }) {
  return (
    <div className="card mt-2 mb-3">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

export default Card;