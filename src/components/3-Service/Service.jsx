import "./service.css";
import Member1 from "../../assets/member-1.svg";
import Member2 from "../../assets/member-2.svg";
import Member3 from "../../assets/member-3.svg";
import Vector1 from "../../assets/Vector1.svg";
import Vector2 from "../../assets/Vector2.svg";
import Vector3 from "../../assets/Vector3.svg";
import Illustration2 from "../../assets/illustration-2.png";
import Illustration3 from "../../assets/illustration-3.png";
import Odometer from "../Odometer/Odometer";
import { useEffect, useRef, useState } from "react";
function Service() {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.3 },
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);
    return (
        <>
            <section className="service" id="service">
                <div className="container">
                    <h2 className="title">
                        Manage your entire community in a single system
                    </h2>
                    <p className="subtitle">Who is Nextcent suitable for?</p>
                    <div className="info">
                        <div className="membership">
                            <img src={Member1} alt="icon" />
                            <span className="shadow"></span>
                            <h3>Membership Organisations</h3>
                            <p>
                                Our membership management software provides full
                                automation of membership renewals and paymentss
                            </p>
                        </div>
                        <div className="membership">
                            <img src={Member2} alt="icon" />
                            <span className="shadow"></span>
                            <h3>National Associations</h3>
                            <p>
                                Our membership management software provides full
                                automation of membership renewals and payments
                            </p>
                        </div>
                        <div className="membership">
                            <img src={Member3} alt="icon" />
                            <span className="shadow"></span>
                            <h3>Clubs And Groups</h3>
                            <p>
                                Our membership management software provides full
                                automation of membership renewals and payments
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="unlock">
                <div className="container">
                    <div className="illustration">
                        <img src={Illustration2} alt="illustration-2" />
                    </div>
                    <div className="text">
                        <h3>
                            The unseen of spending three years at Pixelgrade
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed sit amet justo ipsum. Sed accumsan quam
                            vitae est varius fringilla. Pellentesque placerat
                            vestibulum lorem sed porta. Nullam mattis tristique
                            iaculis. Nullam pulvinar sit amet risus pretium
                            auctor. Etiam quis massa pulvinar, aliquam quam
                            vitae, tempus sem. Donec elementum pulvinar odio.
                        </p>
                        <button className="btn-more btn-1">Learn More</button>
                    </div>
                </div>
            </section>
            <section
                className={`achievements ${visible ? "start" : ""}`}
                ref={ref}>
                <div className="container">
                    <div className="heading">
                        <h2>
                            Helping a local
                            <span>business reinvent itself</span>
                        </h2>
                        <p>We reached here with our hard work and dedication</p>
                    </div>
                    <div className="counts">
                        <div className="details">
                            <div className="icon">
                                <img src={Vector1} alt="icon" />
                            </div>
                            <div className="number">
                                <h3>
                                    <Odometer number={2245341} />
                                </h3>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className="details">
                            <div className="icon">
                                <img src={Member3} alt="icon" />
                            </div>
                            <div className="number">
                                <h3>
                                    <Odometer number={46328} />
                                </h3>
                                <p>Clubs</p>
                            </div>
                        </div>
                        <div className="details">
                            <div className="icon">
                                <img src={Vector2} alt="icon" />
                            </div>
                            <div className="number">
                                <h3>
                                    <Odometer number={828867} />
                                </h3>
                                <p>Event Bookings</p>
                            </div>
                        </div>
                        <div className="details">
                            <div className="icon">
                                <img src={Vector3} alt="icon" />
                            </div>
                            <div className="number">
                                <h3>
                                    <Odometer number={1926436} />
                                </h3>
                                <p>Payments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="unlock" id="faq">
                <div className="container">
                    <div className="illustration">
                        <img src={Illustration3} alt="illustration-3" />
                    </div>
                    <div className="text">
                        <h3>How to design your site footer like we did </h3>
                        <p>
                            Donec a eros justo. Fusce egestas tristique
                            ultrices. Nam tempor, augue nec tincidunt molestie,
                            massa nunc varius arcu, at scelerisque elit erat a
                            magna. Donec quis erat at libero ultrices mollis. In
                            hac habitasse platea dictumst. Vivamus vehicula leo
                            dui, at porta nisi facilisis finibus. In euismod
                            augue vitae nisi ultricies, non aliquet urna
                            tincidunt. Integer in nisi eget nulla commodo
                            faucibus efficitur quis massa. Praesent felis est,
                            finibus et nisi ac, hendrerit venenatis libero.
                            Donec consectetur faucibus ipsum id gravida.
                        </p>
                        <button className="btn-more btn-1">Learn More</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Service;
