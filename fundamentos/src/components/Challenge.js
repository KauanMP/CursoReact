const Challenge = () => {
  const num1 = 10;
  const num2 = 50;

  const somarValores = () => {
      return console.log(`${num1} + ${num2} = ${num1 + num2}`)
  }

  return (
      <div>
          <p>{`${num1} + ${num2}`}</p>
          <button onClick={somarValores}>
          Clique aqui para somar os valores
          </button>
      </div>
  )
}

export default Challenge;