const TYPE_INPUT = 1;
const TYPE_PARAGRAPH = 2;
const TYPE_RADIO = 3;
const TYPE_CHECKBOX = 4;

let questions = [
  {
    id: 1,
    name: "Cau hoi loai input",
    type: TYPE_INPUT,
    answer: "",
    answerOptions: [],
  },
  {
    id: 2,
    name: "Cau hoi loai doan van",
    type: TYPE_PARAGRAPH,
    answer: "",
    answerOptions: [],
  },
  {
    id: 3,
    name: "Cau hoi loai radio",
    type: TYPE_RADIO,
    answer: [],
    answerOptions: [
      {
        name: "0 - 30",
        value: 30,
      },
      {
        name: "31 - 60",
        value: 60,
      },
      {
        name: "61 - 100",
        value: 100,
      },
    ],
  },
  {
    id: 4,
    name: "Cau hoi loai checkbox",
    type: TYPE_CHECKBOX,
    answer: [],
    answerOptions: [
      {
        name: "I have a bike",
        value: "Bike",
      },
      {
        name: "I have a car",
        value: "Car",
      },
      {
        name: "I have a boat",
        value: "Boat",
      },
    ],
  },
];

function renderAnswerOption(question) {
  const typeInput = question.type === TYPE_RADIO ? "radio" : "checkbox";

  const answerOptions = question.answerOptions;
  const htmlArr = answerOptions.map(
    (option, index) =>
      `
            <input type="${typeInput}" id="${option.value}" name="${question.id}" value="${option.value}">
            <label for="${option.value}">${option.name}</label><br>
        `
  );
  return `
      <br>
      ${htmlArr.join("")}
      <br>
      `;
}

function renderAnswer(question) {
  switch (question.type) {
    case TYPE_INPUT:
      return `
      <div class="mt-12">
        <input type="text" class="input input-border-b input--50" placeholder="Enter your answer" disabled>
      </div> 
      `;
    case TYPE_PARAGRAPH:
      return `
      <div class="mt-12">
        <textarea type="text" class="input input-border-b input--50" placeholder="Enter your answer" disabled>
        </textarea>
      </div> 
      `;
    case TYPE_RADIO:
    case TYPE_CHECKBOX:
      return renderAnswerOption(question);
    default:
      return "";
  }
}

function selectedType(questionType, valueType) {
  return questionType === valueType ? "selected" : "";
}

function render() {
  console.log("render");
  const containerQuestion = document.querySelector(".container-question");

  const htmls = questions
    .map((question, index) => {
      const commonInfoQuestion = `
    <div class="flex">
      <span class="font-16 font-bold">${index + 1}. </span>
      <input 
        type="text" 
        class="input input-border-b input--50" 
        placeholder="Enter question"
        value="${question.name}"
      >
      <div class="ml-18 mt-12">
        <select id="select-${index}" class="select font-12 text leading-20 font-normal" value="${
        question.type
      }">
          <option class="select-option" value="${TYPE_INPUT}" ${selectedType(
        question.type,
        TYPE_INPUT
      )}>Input</option>
          <option class="select-option" value="${TYPE_PARAGRAPH}" ${selectedType(
        question.type,
        TYPE_PARAGRAPH
      )}>Paragraph</option>
          <option class="select-option" value="${TYPE_RADIO}" ${selectedType(
        question.type,
        TYPE_RADIO
      )}>Radio</option>
          <option class="select-option" value="${TYPE_CHECKBOX}" ${selectedType(
        question.type,
        TYPE_CHECKBOX
      )}>Check box</option>
        </select>
      </div>
    </div> 
    `;

      return commonInfoQuestion.concat(renderAnswer(question));
    })
    .join("");

  containerQuestion.innerHTML = htmls;

  const selectEl = document.querySelectorAll("select");
  Array.from(selectEl).map((selectElement) => {
    selectElement.addEventListener("change", (e) => {
      const element = e.target;
      const index = +element.id.split("-")[1];
      const value = +element.value;
      changeType(index, value);
    });
  });
}

render();

function setQuestion(newQuestions) {
  questions = newQuestions;
  render();
}

function handleAddNewQuestion() {
  const newQuestion = {
    id: questions[questions.length - 1].id + 1,
    name: "",
    type: TYPE_INPUT,
    answer: [],
    answerOptions: [],
  };
  const newQuestions = [...questions, newQuestion];
  setQuestion(newQuestions);
}

function changeType(index, type) {
  questions[index].type = type;
  render();
}
