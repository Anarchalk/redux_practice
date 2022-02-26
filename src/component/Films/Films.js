import React from "react";
import Card from "@mui/material/Card";

function Films(props) {
  return (
    <div>
      <Card className="films-container">
        <h1>Films</h1>
        <p>Film title: {props.filmsData.title}</p>
      </Card>
    </div>
  );
}

export default Films;
