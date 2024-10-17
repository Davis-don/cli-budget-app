import {fs,chalk,loadBudget} from './imports.js'

const updateBudget = (titleToUpdate,quantityToUpdate,priceToUpdate)=>{
 //budget here
 const budget = loadBudget("./Data/Budget.json");
 //check existense
 const budgetExists = budget.find(
   (currentBudget) => currentBudget.title === titleToUpdate,
 );
 if (!budgetExists) {
   console.log(
     chalk.bgRed(`budget with title  ${titleToUpdate} do not exists`),
   );
   return;
 }
 //return index of content
 const indexOfBudget = budget.findIndex(
   (currentBudget) => currentBudget.title === titleToUpdate,
 );
 //modify the content
 budget[indexOfBudget].quantity = quantityToUpdate;
 budget[indexOfBudget].price = priceToUpdate;
 fs.writeFileSync("./Data/Budget.json", JSON.stringify(budget));
 console.log(chalk.bgGreen("Budget updated successfully!!"));
}
export default updateBudget;