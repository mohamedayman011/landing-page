import "./community.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
function Community() {
    return (
        <section className="community" id="product">
            <div className="container">
                <div className="section-title">
                    <h2 className="title">Caring is the new marketing</h2>
                    <p className="subtitle">
                        The Nexcent blog is the best place to read about the
                        latest membership insights, trends and more. See who's
                        joining the community, read about how our community are
                        increasing their membership income and lot's more.
                    </p>
                </div>
                <div className="content">
                    <div className="box">
                        <img src={Image2} alt="image" />
                        <div className="info">
                            <p>
                                Creating Streamlined Safeguarding Processes with
                                OneRen
                            </p>
                            <a href="#">
                                Readmore
                                <HiOutlineArrowNarrowRight />
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Image3} alt="image" />
                        <div className="info">
                            <p>
                                What are your safeguarding responsibilities and
                                how can you manage them?
                            </p>
                            <a href="#">
                                Readmore
                                <HiOutlineArrowNarrowRight />
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <img src={Image1} alt="image" />
                        <div className="info">
                            <p>
                                Revamping the Membership Model with Triathlon
                                Australia
                            </p>
                            <a href="#">
                                Readmore
                                <HiOutlineArrowNarrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Community;
