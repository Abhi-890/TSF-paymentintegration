import React from "react";
import "./homepage.css";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <div className="img-container">
          <img
            src="https://i1.wp.com/www.giveindia.org/blog/wp-content/uploads/education.jpg?resize=593%2C395&ssl=1"
            alt=""
          />
        </div>
        <div className="col">
          <h1>
            Not all of us can do great things but we can do small things with
            great love
          </h1>
          <p>
            No one has ever become poor by giving. A small donation could help a
            child or could ease
            <br /> the pain of a parent.
          </p>
          <button>
            <a href="https://rzp.io/l/BxzFCTp8">Donate Now</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
