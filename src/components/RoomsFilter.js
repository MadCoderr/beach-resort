import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";

function RoomsFilter({ rooms }) {
  const ctx = useContext(RoomContext);

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };

  let types = getUnique(rooms, "type");
  types = ["all", ...types];

  let capacity = getUnique(rooms, "capacity");

  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={ctx.type}
            className="form-control"
            onChange={ctx.onChange}
          >
            {types.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* end of select type */}
        {/*  guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={ctx.capacity}
            className="form-control"
            onChange={ctx.onChange}
          >
            {capacity.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Room Price ${ctx.price}</label>
          <input
            type="range"
            name="price"
            min={ctx.minPrice}
            max={ctx.maxPrice}
            id="price"
            value={ctx.price}
            onChange={ctx.onChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={ctx.minSize}
              onChange={ctx.onChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={ctx.maxSize}
              onChange={ctx.onChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={ctx.breakfast}
              onChange={ctx.onChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={ctx.pets}
              onChange={ctx.onChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}

export default RoomsFilter;
