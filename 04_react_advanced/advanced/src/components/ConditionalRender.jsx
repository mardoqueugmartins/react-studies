import React from "react";

const ConditionalRender = () => {
  const x = 11;

  return (
    <div>
      {/*  Render Condicional */}
      <h3>Isso será exibido?</h3>
      {x > 10 && <p>Se x for true, sim!</p>}
    </div>
  );
};

export default ConditionalRender;
