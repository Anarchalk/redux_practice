import React from "react";
// import "./ProfilePicture.css";

function ProfilePicture() {
  const imgURL =
    "https://starwars-visualguide.com/assets/img/characters/22.jpg";

  return (
    <React.Fragment>
      <img src={imgURL} alt="the image of character" width="500" height="600" />
    </React.Fragment>
  );
}

export default ProfilePicture;
