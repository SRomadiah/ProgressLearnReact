import React from "react";
import "./card.css";
export default function Card({ name, number }) {
  return (
    <div className="parents">
      <div className="card">
        <h1>Hello My Name {name}</h1>
        <p>I'm in {number}rd semester</p>
      </div>
    </div>
  );
}
