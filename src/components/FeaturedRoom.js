import React, { Component } from "react";
import { RoomContext } from "../Context";

class FeaturedRoom extends Component {
  static contextType = RoomContext;

  render() {
    console.log(this.context);
    return <div>Hello from Featured Room </div>;
  }
}

export default FeaturedRoom;
