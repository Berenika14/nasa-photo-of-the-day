import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY, API_URL } from "./Constants";
import { Button } from "reactstrap";
import Image from "./components/Image/Image";
import Explanation from "./components/Explanation/Explanation";
import CopyRight from "./components/Copyright/Copyright";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${API_URL}?api_key=${API_KEY}`)
        .then((res) => {
          console.log(res);
          setNasaData(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <nav>
        <a
          href="https://www.calendardate.com/todays.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {nasaData.date}
        </a>
        <a
          href="https://github.com/Berenika14/nasa-photo-of-the-day/pull/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Repository
        </a>
      </nav>
      <div>
        <h1> {nasaData.title}</h1>
      </div>
      <Image nasaURL={nasaData.url} />
      <Explanation imgExplanation={nasaData.explanation} />
      <CopyRight copyRightOfImg={nasaData.copyright} />
      {/**
       * Used reactstrap to create a button at the bottom of the page
       */}
      <Button
        color="primary"
        href="https://reactstrap.github.io/?path=/story/home-installation--page"
      >
        Click to navigate to reactstrap
      </Button>
    </div>
  );
}

export default App;
