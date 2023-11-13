import React from "react";
import drop from "../assets/images/1.png";

import { Text, PrimaryBtn } from "./index";

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-left">
                    <h1>Get your water purifier repaired same day.</h1>
                    <Text>
                        Experience the convenience of prompt and professional water purifier repairs. Our skilled technicians are dedicated to restoring your water purifier's peak performance on the
                        very same day.
                    </Text>
                    <PrimaryBtn text={"Call Us"} />
                </div>
                <div className="hero-right">
                    <img src={drop} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
