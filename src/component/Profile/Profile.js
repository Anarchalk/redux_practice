import axios from "axios";
import React, { Component } from "react";
import "./Profile.css";
import ProfilePicture from "../ProfilePicture/ProfilePicture";
import Films from "../Films/Films";
import Starship from "../Starship/Starship";
import CharacterMeta from "../CharacterMeta/CharacterMeta";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterMeta: {},
      starshipData: {},
      films: {},
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      let swapi_url = "https://swapi.dev/api/people/22/";

      const response = await axios.get(swapi_url);
      const responsefilms = await axios.get(response.data.films[0]);
      const responseStarship = await axios.get(response.data.starships[0]);

      //setState
      console.log("ANAR");
      this.setState({
        ...this.state,
        characterMeta: response.data,
        starshipData: responseStarship.data,
        films: responsefilms.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <div className="profile-container">
          <ProfilePicture />
          <div>
            <CharacterMeta characterMeta={this.state.characterMeta} />
            <Starship starshipData={this.state.starshipData} />
            <Films filmsData={this.state.films} />
          </div>
        </div>
      </>
    );
  }
}
