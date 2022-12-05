import eth from "./assets/images/icon-ethereum.svg";
import clock from "./assets/images/icon-clock.svg";
import overlay from "./assets/images/icon-view.svg";
import usericon from "./assets/images/image-avatar.png";
const image = require("./assets/images/image-equilibrium.jpg");

const Card = () => {
    return (
        <div className="card">
            <div className="card-img">
                <img className="image" src={image} alt="imageequilibrium" />
                <img className="overlay-img" src={overlay} alt="icon view" />
                <div className="card-img-overlay"></div>
            </div>
            <div className="card-body">
                <div className="card-title">
                    <h2>Equilibrium #3429</h2>
                </div>
                <div className="card-desc">
                    <p>Our Equilibrium collection promotes balance and calm.</p>
                </div>
                <div className="stats">
                    <div className="eth">
                        <img src={eth} alt="eth" />
                        <p>0.041ETH</p>
                    </div>
                    <div className="days">
                        <img src={clock} alt="time icon" />
                        <p>3 days left</p>
                    </div>
                </div>
                <div className="card-user">
                    <img src={usericon} alt="user icon" />
                    <p>
                        Creation of <a href="https://www.frontendmentor.io/profile/Ao-chi">Jules Wyvern</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Card;
