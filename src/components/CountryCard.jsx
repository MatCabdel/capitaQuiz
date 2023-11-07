import React from "react";


const CountryCard = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="card">
          <input
            type="checkbox"
            id="card1"
            className="more"
            aria-hidden="true"
          ></input>
          <div className="content">
            <div
              className="front"
              style={{
                backgroundImage: `./src/Assets/angleterre.png')`,
              }}
            >
              <div className="inner">
                <h2>Royaume-Unis</h2>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <label htmlFor="card1" className="button" aria-hidden="true">
                  Voir la capitale
                </label>
              </div>
            </div>
            <div className="back">
              <div className="inner">
                <div className="info">
                  <span>5</span>
                  <div className="icon">
                    <i className="fas fa-users"></i>
                    <span>people</span>
                  </div>
                </div>
                <div className="info">
                  <span>4</span>
                  <div className="icon">
                    <i className="fas fa-door-open"></i>
                    <span>rooms</span>
                  </div>
                </div>
                <div className="info">
                  <span>3</span>
                  <div className="icon">
                    <i className="fas fa-bed"></i>
                    <span>beds</span>
                  </div>
                </div>
                <div className="info">
                  <span>1</span>
                  <div className="icon">
                    <i className="fas fa-bath"></i>
                    <span>bath</span>
                  </div>
                </div>
                <div className="description">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vitae, accusamus.
                  </p>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptates earum nostrum ipsam ullam, reiciendis nam
                    consectetur? Doloribus voluptate architecto possimus
                    perferendis tenetur nemo amet temporibus, enim soluta nam,
                    debitis.
                  </p>
                </div>
                <div className="location">Warsaw, Poland</div>
                <div className="price">38€ / day</div>
                <label
                  htmlFor="card1"
                  className="button return"
                  aria-hidden="true"
                >
                  <i className="fas fa-arrow-left"></i>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* More card components go here */}
      </div>
    </div>
  );
};

export default CountryCard;
