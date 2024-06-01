import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <small>
          coded by Jeany Hlangabeza,{" "}
          <a
            href="https://github.com/Jeany-hlangabeza/updated-weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://boisterous-horse-23cacb.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </small>
      </div>
    </div>
  );
}
