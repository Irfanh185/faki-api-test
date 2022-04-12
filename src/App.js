import React, { useEffect, useState } from "react";
import "./App.css";
import FakeApi from "./FakeApi";

function App() {
  const [fakeApi, setFakeApi] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let fakeApi = [];
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        fakeApi = data.slice(0, 20);
        setFakeApi(fakeApi);
        console.log(fakeApi);
      });
  };
  return (
    <div className="App">
      <div className="main-container">
        {fakeApi.map((api) => (
          <FakeApi key={api.title} title={api.title} image={api.thumbnailUrl} />
        ))}
      </div>
    </div>
  );
}

export default App;
