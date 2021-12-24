import React from "react";
import equilibriumImg from "../images/image-equilibrium.jpg";
import creatorImg from "../images/image-avatar.png";
import ethIcon from "../images/icon-ethereum.svg";
import clockIcon from "../images/icon-clock.svg";

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img
            className="equilibrium__img"
            src={equilibriumImg}
            alt="Equilibrium NFT illustration."
          />
        </div>
        <div className="card__details">
          <h1 className="card__title">Equilibrium #3429</h1>
          <p className="card__info1">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="card__info2">
            <div className="eth">
              <img className="eth__icon" src={ethIcon} alt="ethereum" />
              <p className="eth__info">0.041 ETH</p>
            </div>
            <div className="time">
              <img className="time__icon" src={clockIcon} alt="" />
              <p className="time__info">3 days left</p>
            </div>
          </div>
          <div className="creator">
            <img
              className="creator__img"
              src={creatorImg}
              alt="Creator profile"
            />
            <p className="creator__info">
              Creation of <span>Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
