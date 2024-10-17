import {chalk,loadBudget} from './imports.js'

const getSpecific = (titleToUseForSpecificBudget)=>{
//budget here
const budget = loadBudget("./Data/Budget.json");
//check existense
const budgetExists = budget.find(
  (currentBudget) => currentBudget.title === titleToUseForSpecificBudget,
);
if (!budgetExists) {
  console.log(
    chalk.bgRed(
      `budget with title  ${titleToUseForSpecificBudget} do not exists`,
    ),
  );
  return;
}
//return index of content
const indexOfBudget = budget.findIndex(
  (currentBudget) => currentBudget.title === titleToUseForSpecificBudget,
);
//display the content
console.log(chalk.bgGreen("Budget pulled successfully!!"));
console.log(`Title: ${budget[indexOfBudget].title}`);
console.log(`Quantity: ${budget[indexOfBudget].quantity}`);
console.log(`Price : ${budget[indexOfBudget].price}`);

}
export default getSpecific;