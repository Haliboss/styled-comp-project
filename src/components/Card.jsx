import React from "react";

const Card = ({ data }) => {
  //console.log(data);

  return (
    <div>
      {data.map((item) => {
        const { id, title, body, image } = item;
        return (
          <div key={id}>
            <h2 >{title}</h2>
            <p>{body}</p>
            <div>
              <img src={`./images/${image}`} alt="img" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
