import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Service from "../Service/Beer.service";
import NavbarHome from "./Navbar";
import { Link } from "react-router-dom";

class RandomBeer extends Component {
  constructor() {
    super();
    this.state = { beer: [] };
    this.service = new Service();
  }

  componentDidMount = () => {
    // const beer = this.props.match.params.id;
    this.service
      .getRandomBeer()
      .then(theBeer => this.setState({ beer: theBeer.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <NavbarHome />
        <br></br>
        <h1>Details {this.state.beer.name}</h1>
        <img src={this.state.beer.image_url} alt={this.state.beer.name} />
        <p>{this.state.beer.tagline}</p>
        <p>{this.state.beer.first_brewed}</p>
        <p>{this.state.beer.attenuation_level}</p>
        <p>{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
        <br></br>
        <Container>
          <br></br>
          <img src="../images/random-beer.png" alt="Beers" />
          <br></br>
          <p>blablabla</p>
          <br></br>
          <Link to="/beers">Beers</Link> <br></br>
          <Link to="/">Home</Link> <br></br>
          <Link to="/new-beer">New Beer</Link> <br></br>
        </Container>
      </>
    );
  }
}

export default RandomBeer;
