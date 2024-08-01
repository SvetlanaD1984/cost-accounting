let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");
let question3 = prompt("Введите обязательную статью расходов в этом месяце");
let question4 = prompt("Во сколько обойдется?");

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

appData.expenses.question1 = question2;
appData.expenses.question3 = question4;

let budgetPerDay = appData.budget / 30;
alert(budgetPerDay);
