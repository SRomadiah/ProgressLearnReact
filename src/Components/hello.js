import React from "react";

const Hello = () => {
  // menggunakan jsx
  // return (
  //   <div className='dummyClass'>
  //     <h1>Hi Romie</h1>
  //   </div>
  // );
  return React.createElement(
    "div",
    {
      id: "hello",
      className: "dummy",
    },
    React.createElement("h1", null, "Hi romie")
  );
};

export default Hello;
