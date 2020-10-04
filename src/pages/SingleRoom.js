import React, { Component } from "react";
import { Link } from "react-router-dom";

import DefaultBg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

import { RoomContext } from "../Context";

class SingleRoom extends Component {
  static contextType = RoomContext;

  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBg: DefaultBg,
    };
  }

  componentDidMount() {}

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const [bgImage, ...images] = room.images;
    return (
      <>
        <StyledHero img={bgImage}>
          <Banner title={`${room.name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((img, i) => (
              <img key={i} src={img} alt={room.name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{room.description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: {room.price}</h6>
              <h6>size: {room.size} SQFT</h6>
              <h6>
                max capacity:{" "}
                {room.capacity > 1
                  ? `${room.capacity} people`
                  : `${room.capacity} person`}
              </h6>
              <h6>{room.pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{room.breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {room.extras.map((item, i) => (
              <li key={i}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleRoom;
