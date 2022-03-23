import Navbar from "../navbar";
import DataButton from "../testComp";
import ContentLeft from "../contentLeft";
import Dashcard from "../dashcard";
import { BrowserRouter } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="App">
        <header style={{ color: "red" }} className="App-header">
          <Navbar />
        </header>
        <div>
          <Dashcard />
          <DataButton />
          <ContentLeft />
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

export default Home;
