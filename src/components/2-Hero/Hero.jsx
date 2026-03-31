import "./hero.css";
import Illustration from "../../assets/illustration-1.png";
function Hero() {

    return (
        <section className="hero">
            <div className="container">
                <div className="info">
                    <h2>
                        Lessons and insights
                        <span>from 8 years</span>
                    </h2>
                    <p>
                        Where to grow your business as a photographer: site or
                        social media?
                    </p>
                    <button className="btn btn-1 btn-register">Register</button>
                </div>
                <div className="illustration">
                    <img src={Illustration} alt="illustration-1" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
