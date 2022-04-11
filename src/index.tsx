import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Title from "./components/Title";
import CharactersPage from "./components/CharactersPage";
import LocationsPage from "./components/LocationsPage";
import "./styles.css";

// https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Title />
      <Routes>
        <Route path='/' element={<App />}>
          {/* Render characters at "/" and "/characters" */}
          <Route path='/' element={<CharactersPage />} />
          <Route path='characters' element={<CharactersPage />}>
            {/* Render single character at "/characters/:name" */}
            <Route path=':characterName' element={<CharactersPage />} />
          </Route>
          {/* Render locations at  "/locations" */}
          <Route path='locations' element={<LocationsPage />}>
            {/* Render all characters with an origin of the location at "/locations/:id" */}
            <Route path=':locationName' element={<LocationsPage />} />
          </Route>
          {/* Render "There's nothing here" everywhere else */}
          <Route
            path='*'
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
