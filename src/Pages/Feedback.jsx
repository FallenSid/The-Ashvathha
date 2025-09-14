import Navbar from "../components/Navbar";
import "./feedback.css";

const Feedback = () => {
  return (
    <div classname="container">
      <Navbar />

       <img
        src="/assets/image/download (31).jpeg.jpg"
        alt="FeedbackPage-background"
        id="feedback-bg"
       />
     <div className="main">


      <div className="char-img">
        <img
          src="/assets/image/char/this guy-Photoroom.png"
          alt="Monster-image"
          id="monster-img"
          />
      </div>

      <div className="content">
        <h1>Tell Us What's Inside you</h1>

        <form action="#">
          <div className="name-input">
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Human..." id="name" />
          </div>

          <div className="textarea">
            <label htmlFor="feedback">FeedBack:</label>
            <textarea
              name="textarea"
              id="feedback"
              placeholder="I am Filthy Monkey"
              ></textarea>
          </div>

          <br />

          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </form>
      </div>
     </div>
    </div>
  );
};

export default Feedback;
