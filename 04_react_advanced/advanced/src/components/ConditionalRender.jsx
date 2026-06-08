import React from "react";

const ConditionalRender = () => {
  const x = 11;

  const name = "Mardoqueu";

  return (
    <div>
      {/*  Render Condicional */}
      <h3>Isso será exibido?</h3>
      {x > 10 && <p>Se x for true, sim!</p>}
      {/* Else condicional */}
      <h3>Render ternário:</h3>
      {name === "Mardoqueu" ?(
        <div>
            <p>Olá Mardoqueu!</p>
        </div>
      ) : (
        <div>
            <p>Nome não encontrado!</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
