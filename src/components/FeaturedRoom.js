import React, { Component } from "react";
import { RoomContext } from "../Context";

import LoadingGif from "./Loading";
import Room from "./Room";
import Title from "./Title";

class FeaturedRoom extends Component {
  static contextType = RoomContext;

  render() {
    const { featuredRooms: rooms, loading } = this.context;
    let setRooms = rooms.map((room) => <Room key={room.id} room={room} />);

    return (
      <section className="featured-rooms">
        <Title title="featured room" />
        <div className="featured-rooms-center">
          {loading ? <LoadingGif /> : setRooms}
        </div>
      </section>
    );
  }
}

export default FeaturedRoom;
