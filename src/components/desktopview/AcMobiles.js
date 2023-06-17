import React from "react";
import "./AcMobiles.css";

function AcMobiles(props) {
  const { acMobilesLists } = props;

  return (
    <>
      <div className="acMobile-list-main">
        {acMobilesLists.map((item) => (
          <div className="acMobile-list">
            <img src={item} />
          </div>
        ))}
      </div>
    </>
  );
}

export default AcMobiles;
