import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi?",
      },
      {
        icon: <FaHiking />,
        title: "Hiking Spots",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi?",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi?",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quasi?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((el, i) => (
            <article key={i} className="service">
              <span>{el.icon}</span>
              <h6>{el.title}</h6>
              <p>{el.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;
