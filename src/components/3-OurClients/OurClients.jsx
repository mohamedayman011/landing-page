import "./ourClients.css";
import Icon1 from "../../assets/client-logo-1.png";
import Icon2 from "../../assets/client-logo-2.png";
import Icon3 from "../../assets/client-logo-3.png";
import Icon4 from "../../assets/client-logo-4.png";
import Icon5 from "../../assets/client-logo-5.png";
import Icon6 from "../../assets/client-logo-6.png";
function OurClients() {
    let icons = [
        Icon1,
        Icon2,
        Icon3,
        Icon4,
        Icon5,
        Icon6,
        Icon1,
        Icon2,
        Icon3,
        Icon4,
        Icon5,
        Icon6,
        Icon3,
    ];
    return (
        <section className="our-clients">
            <div className="container">
                <h2 className="title">Our Clients</h2>
                <p className="subtitle">
                    We have been working with some Fortune 500+ clients
                </p>
            </div>
            <div className="carousal">
                <div className="group">
                    {icons.map((icon, i) => (
                        <img src={icon} alt="icon" key={i} />
                    ))}
                </div>
                <div className="group" aria-hidden='true'>
                    {icons.map((icon, i) => (
                        <img src={icon} alt="icon" key={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default OurClients;
