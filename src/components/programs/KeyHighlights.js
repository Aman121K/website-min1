import React from "react";

function KeyHighlights({ highlight }) {
  return (
    <div className="container mt-4">
      <h2 className="admission_heading mb-4">Why Excelsior?</h2>
      <div className="row mb-4">
        {highlight.FirstRow.map((e) => (
          <div className="col-lg-3 col-sm-12 col-xs-12">
            <p className="text-1000 text-center">{e}</p>
          </div>
        ))}
      </div>
      <div className="row mb-5">
        {highlight.SecondRow.map((e) => (
          <div className="col-lg-3 col-sm-12 col-xs-12">
            <p className="text-1000 text-center">{e}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KeyHighlights;