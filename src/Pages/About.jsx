import Navbar from "../components/Navbar";
import './about.css'
const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <img src="src/assets/image/aboutwritterpage.jpg" alt="" id="about-bg" />
        <div className="img-area">
          <img id="writter-img" src="src/assets/image/raizen.jpg" alt="" />
          <h1>Raizen: Owner of Empty Thrown</h1>
        </div>
        <div className="writter-desc">
          <h2>The Writter Of Ashvathha:The One Who Planned Everything</h2>

          <p>About the Author: Raizen</p>
          <p>They call him Raizen.</p>
          <p>No face. No past. Just pages that bleed.</p>
          <p>
            His words don’t seek comfort. They do not heal. They haunt. Each
            sentence carved with surgical silence. Each chapter—an incision
            across the veil of what stories are supposed to be.
          </p>
          <p>
            Perfection isn't a goal. It’s a punishment. One he relives nightly
          </p>
          <p>He does not sleep peacefully.</p>
          <p>
            The mind behind Ashvathha does not believe in happy endings. Or
            clean beginnings. Only cycles—endless, burning, beautiful cycles. He
            doesn’t write heroes. He writes aftermaths
          </p>
          <p>
            His work is a mirror turned inward, but the reflection has no eyes.
            Only flame and the memory of something ancient—something that once
            ruled, and may rule again.
          </p>
          <p>But control?</p>
          <p>That is sacred.</p>
          <p>His dreams are crimson. His truths, pitch black.</p>
          <p>There is no throne in his world.</p>
          <p>
            Only the shape of something missing—waiting for someone strong
            enough to claim it.
          </p>
          <p>And in every word he leaves behind, the crown sharpens.</p>
        </div>
      </div>
    </>
  );
};

export default About;
