import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="Intro-area">
          <h1>The Ashvathha</h1>
          <p className="red-font">WELCOME TO A WORLD THAT FORGOT HOPE...</p>
          <p>
            In the shadow of a world once ruled by men, the age of demons has
            begun.
          </p>
          <p>
            The story unfolds in the aftermath of an apocalyptic collapse — a
            cataclysmic event that fractured the fabric of reality and reshaped
            the Earth into a realm ruled by nightmares. In this twisted,
            post-apocalyptic landscape, humanity clings to survival as demonic
            hierarchies dominate cities, skies,and even the law of existence.
          </p>
          <p>
            {" "}
            But from the ashes rise seven broken souls — not heroes, not saviors
            — each marked by loss, vengeance, or fractured loyalty. Bound by
            uncertain fates, they traverse the ruins of civilization and the
            ancient glyph-forged Paths that challenge not just the body, but the
            soul itself.
          </p>
        </div>
        <div className="img-display">
          <img src="Ashvathha\src\assets\image\bg1.png" alt="Nothing " />
        </div>
      </div>
    </>
  );
}

export default App;
