import React from "react";
import { Textfield, Button } from "react-mdl";
export const Form = props => {
  return (
    <div className="form-body">
      <form onSubmit={props.getWeather}>
        <Textfield
          onChange={() => {}}
          label="City"
          floatingLabel
          name="city"
          style={{
            width: "200px",
            color: "black",
            margin: "10px"
          }}
        />
        <Textfield
          onChange={() => {}}
          label="Country"
          floatingLabel
          name="country"
          style={{
            width: "200px",
            color: "black",
            margin: "10px"
          }}
        />
        <Button raised ripple primary className="button-form">
          Button
        </Button>
      </form>
    </div>
  );
};

export default Form;
