import {chalk,loadBudget} from './imports.js'

const getAll=()=>{
//budget here
const budget = loadBudget("./Data/Budget.json");

if (budget.length === 0) {
  console.log(chalk.bgYellow("You dont have any budget yet"));
  return;
}
console.log(chalk.bgGreen("All budget Items pulled successfully!!"));
budget.forEach((item) => {
  //display the content
  console.log("=================================");
  console.log(`Title: ${item.title}`);
  console.log(`Quantity: ${item.quantity}`);
  console.log(`Price : ${item.price}`);
});
}
export default getAll;