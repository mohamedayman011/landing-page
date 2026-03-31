import "./customer.css";
import Image0 from "../../assets/image0.png";
import Icon1 from "../../assets/customer1.png";
import Icon2 from "../../assets/client-logo-2.png";
import Icon3 from "../../assets/client-logo-3.png";
import Icon4 from "../../assets/client-logo-4.png";
import Icon5 from "../../assets/client-logo-5.png";
import Icon6 from "../../assets/client-logo-6.png";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function Customer() {
    let icons = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];
    return (
        <section className="customer">
            <div className="container">
                <div className="image">
                    <img src={Image0} alt="image0" />
                </div>
                <div className="info">
                    <p>
                        Maecenas dignissim justo eget nulla rutrum molestie.
                        Maecenas lobortis sem dui, vel rutrum risus tincidunt
                        ullamcorper. Proin eu enim metus. Vivamus sed libero
                        ornare, tristique quam in, gravida enim. Nullam ut
                        molestie arcu, at hendrerit elit. Morbi laoreet elit at
                        ligula molestie, nec molestie mi blandit. Suspendisse
                        cursus tellus sed augue ultrices, quis tristique nulla
                        sodales. Suspendisse eget lorem eu turpis vestibulum
                        pretium. Suspendisse potenti. Quisque malesuada enim
                        sapien, vitae placerat ante feugiat eget. Quisque
                        vulputate odio neque, eget efficitur libero condimentum
                        id. Curabitur id nibh id sem dignissim finibus ac sit
                        amet magna.
                    </p>
                    <a href="#" className="author">
                        Tim Smith
                    </a>
                    <p className="subtitle">
                        British Dragon Boat Racing Association
                    </p>
                    <div className="customer-icons">
                        {icons.map((icon, i) => (
                            <img src={icon} alt="icon" key={i} />
                        ))}
                        <a href="#">
                            Meet all customers
                            <HiOutlineArrowNarrowRight />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Customer;
