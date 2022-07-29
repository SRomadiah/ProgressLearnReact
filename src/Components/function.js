import React from "react";

// function Greet() {
//   return <h1>Hello Romie</h1>;
// }
// karena menggunakan export const maka di app js di beri tanda {}
// export const Greet = () => <h1>Hello Romie</h1>;
// export default Greet;

// ini jika menggunakan export nya di pisah
const Greet = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} as a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
