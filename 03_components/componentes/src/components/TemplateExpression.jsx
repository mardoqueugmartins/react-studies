
const TemplateExpression = () => {
    const name = "Mardoqueu"
    
    const data = {
        age: 30,
        job: "Programador"
    };

  return (
    <div>
      <p>A soma de 2 + 2 é: {2 + 2}</p>
      <h3>Bem-vindo {name}!</h3>
      <p>Sua idade é {data.age} anos e você é {data.job}.</p>
    </div>
  )
}

export default TemplateExpression