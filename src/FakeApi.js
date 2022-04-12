import React from "react";

function FakeApi({ title, image }) {
  return (
    <div className="api-container">
      <h1 className="title">{title}</h1>
      <img src={image} alt="placeholder" />
    </div>
  );
}

export default FakeApi;
