import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    const cost = filteredCars.reduce((accum, car) => {
      return accum + car.cost;
    }, 0);
    return cost;
  });
  return <div className="car-value">Total Cost: ${totalCost}</div>;
};

export default CarValue;
