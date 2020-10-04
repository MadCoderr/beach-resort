import React from "react";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomsContainer({ context }) {
  const { loading, rooms, sortedRooms } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomsContainer);

// import React from "react";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, rooms, sortedRooms } = value;

//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             Hello from room container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

// export default RoomsContainer;
