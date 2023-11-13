import React from "react";
import { Title, Text } from "./index";
import { services } from "../utils/data";

const Services = () => {
    return (
        <section className="services-section" id="services-section">
            <div className="container">
                <Title>Services we provide</Title>
                <div className="services">
                    {services.map((service) => (
                        <div className="service" key={service.id}>
                            <h1>{service.name}</h1>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
