import {fs,chalk,loadBudget} from './imports.js'

const deleteSpecific = (title)=>{
//budget here
const budget = loadBudget("./Data/Budget.json");
if (budget.length === 0) {
  console.log(chalk.bgYellow("Nothing to delete"));
  return;
}
//check existense
const budgetExists = budget.find(
  (currentBudget) => currentBudget.title === title,
);
if (!budgetExists) {
  console.log(chalk.bgRed(`budget with title  ${title} do not exists`));
  return;
}
const remBudget = budget.filter(
  (currentBudget) => currentBudget.title !== title,
);
fs.writeFileSync("./Data/Budget.json", JSON.stringify(remBudget));
console.log(
  chalk.bgGreen(`Budget with Title ${title} deleted successfully`),
);
}
export default deleteSpecific;