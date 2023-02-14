const TemplateExpressions = () => {
  const name = "Kauan";
  const data = {
    age: 18,
    job: "Programmer",
  };

  return (
    <div>
      <h1>Olá {name}, tudo bem?</h1>
      <p>Você atua como: {data.job} e tem {data.age} anos</p>
      <p>{4 + 4}</p>
    </div>
  );
};

export default TemplateExpressions;
