import React from "react";
import { Card } from "@mui/material";

function CharacterMeta(props) {
  return (
    <div>
      <Card className="character-meta-container">
        <h1>Character</h1>
        <p>Name: {props.characterMeta.name}</p>
        <p>Hair Color: {props.characterMeta.hair_color} </p>
        <p>Height: {props.characterMeta.height}</p>
      </Card>
    </div>
  );
}

export default CharacterMeta;
