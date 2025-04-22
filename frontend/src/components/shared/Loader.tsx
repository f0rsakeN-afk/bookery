import React from "react";
import "../../Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <div className="cubes">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="cube">
            {[...Array(6)].map((_, j) => (
              <div key={j} className="side"></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
