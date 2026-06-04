const Events = () => {

  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
  };

  // Funções de Renderização
  const renderSomething = (x) => {
    if (x) {
      return <h1>Rederizando isso!</h1>
    } else {
      return <h1>Renderizando outra coisa.</h1>
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => console.log("Testando evento de clique.")}>
          Clique aqui.
        </button>
      </div>
      {/* Eventos com função */}
      <div>
        <button onClick={handleClick}>Clique aqui com função</button>
      </div>
      {/*  Função de renderização */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
