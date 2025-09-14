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
          <ul>
            <li>Secrets buried in Blood...</li>
            <li>Bonds tested by fire...</li>
            <li>Illusions more real than memory...</li>
          </ul>
          <p>
            This is not a tale of good versus evil. It is the slow unraveling of
            identity in a world where hope is weaponized, and power comes at the
            cost of self.
          </p>
          <p>
            And ask yourself — when the world offers you a heaven...{" "}
            <strong>will you take it? Or will you burn it?</strong>
          </p>
        </div>
        <div className="img-display">
          <img src="/assets/image/bg1.png" alt="HomePage-Background " />
        </div>
      </div>
    </>
  );
}

export default App;
