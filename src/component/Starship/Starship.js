import { Card } from "@mui/material";
import React from "react";

function Starship(props) {
  return (
    <div>
      <Card className="star-ship-container">
        <h1>StarShip</h1>
        <p>Name: {props.starshipData.name}</p>
        <h2>Films Slave 1 was seen in</h2>
        <p>The Empire Strikes Back</p>
        <p>Attack of the Clones</p>
      </Card>
    </div>
  );
}

export default Starship;
