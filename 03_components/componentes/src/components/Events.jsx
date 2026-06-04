const Events = () => {

  const handleClick = (e) => {
    console.log(e);
    console.log("Executou");
  }

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
    </div>
  );
};

export default Events;
