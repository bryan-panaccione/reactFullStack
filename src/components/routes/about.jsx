import Navbar from "../navbar";
import DataButton from "../testComp";
import Dashcard from "../dashcard";
import Banner from "../banner";
import { BrowserRouter } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="App">
        <header style={{ color: "red" }} className="App-header">
          <Navbar />
        </header>
        <div>
          <Banner />
          <Dashcard />
          <DataButton />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          targent="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </div>
  );
}

export default About;
