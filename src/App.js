import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import logo from "./images/logo.jpeg";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://marvel-z-backend.herokuapp.com/`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        {" "}
        <img
          style={{
            marginBottom: 60,
            marginLeft: 500,
            width: 300,
            height: 80,
          }}
          src={logo}
          alt=""
        />{" "}
        <div style={{ marginLeft: 500, width: 900 }}>
          <span>
            <button className="navigation">characters</button>
          </span>
          <span>
            {" "}
            <button className="navigation">comics </button>
          </span>
          <span>
            <button className="navigation">favorite</button>
          </span>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.characters.results.map((result, index) => {
          return (
            <div
              style={{
                cursor: "pointer",
                marginTop: 40,
                marginBottom: 50,
              }}
            >
              <li style={{ listStyle: "none" }} key={index}>
                <div
                  style={{
                    width: 150,
                    height: 200,
                    marginRight: 30,
                  }}
                >
                  <img
                    style={{ width: 150, height: 150 }}
                    src={result.thumbnail.path + ".jpg"}
                    alt=""
                  />

                  <div
                    className="description"
                    style={{
                      width: 150,

                      textAlign: "center",
                      height: 100,
                      overflow: "hidden",

                      color: "white",
                      borderBottomRightRadius: 15,
                      borderRightStyle: "solid",
                    }}
                  >
                    <div style={{ fontSize: 20 }}> {result.name}</div>
                    <div
                      style={{
                        height: 70,
                        overflow: "hidden",
                        fontSize: 15,
                        color: "grey",
                      }}
                    >
                      {" "}
                      {result.description}
                    </div>
                  </div>
                </div>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
