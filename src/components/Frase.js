import React from "react";
import Card from "react-bootstrap/Card";

export default function Frase(props) {
  return (
    <>
      <Card className="my-5">
        <Card.Body>
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <img src={props.personaje.image} alt="" />
            </div>
          <div className="col-sm-12 col-md-8">
            <Card.Title>{props.personaje.character}</Card.Title>
            <Card.Text>
              {props.personaje.quote}
            </Card.Text>
          </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
