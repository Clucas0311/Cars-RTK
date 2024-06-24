import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";
const CarForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });
  const handleNameChange = (event) => {
    //event.target.value
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const carCost = Number(event.target.value);
    dispatch(changeCost(carCost));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleFormSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name: </label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost: </label>
            <input
              className="input is-expanded"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
