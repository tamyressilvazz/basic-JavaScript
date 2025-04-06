const questions = [
    {
      category: "Ciência",
      question: "Qual é o planeta mais próximo do sol?",
      choices: ["Mercúrio", "Vênus", "Terra"],
      answer: "Mercúrio",
    },
    {
      category: "História",
      question: "Quem foi o primeiro presidente dos Estados Unidos?",
      choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
      answer: "George Washington",
    },
    {
      category: "Geografia",
      question: "Qual é o maior oceano do mundo?",
      choices: ["Atlântico", "Pacífico", "Índico"],
      answer: "Pacífico",
    },
    {
      category: "Matemática",
      question: "Quanto é 7 vezes 8?",
      choices: ["54", "56", "64"],
      answer: "56",
    },
    {
      category: "Entretenimento",
      question: "Qual é o nome do protagonista da série Harry Potter?",
      choices: ["Harry Potter", "Ron Weasley", "Hermione Granger"],
      answer: "Harry Potter",
    },
  ];
  
  function getRandomQuestion(questions){
    const randomIndex = Math.floor(Math.random() * questions.length);
  
    return questions[randomIndex];
  }
  
  function getRandomComputerChoice(choices){
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function getResults(question, choice){
    if(question.answer !== choice){
      return `A escolha do computador está errada. A resposta correta é ${question.answer}`;
    }else{
      return "A escolha do computador está correta!";
    }
  }

// Exemplo de uso:
const question = {
    category: "Matemática",
    question: "Quanto é 7 vezes 8?",
    choices: ["54", "56", "64"],
    answer: "56",
  };
  
  const computerChoice = "56";
  console.log(getResults(question, computerChoice)); // Output: Correto! O computador escolheu a resposta certa.
