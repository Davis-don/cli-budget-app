import {fs,chalk,loadBudget} from './imports.js'

const addBudget = (title,quantity,price)=>{
    const newBudgetItem = {
        title: title,
        quantity: quantity,
        price: price,
      };
  
      //budget here
      const budget = loadBudget("./Data/Budget.json");
  
      const budgetExists = budget.find(
        (currentBudget) => currentBudget.title === title,
      );
      if (budgetExists) {
        console.log(chalk.bgRed(`budget with title  ${title} exists`));
        return;
      }
  
      budget.push(newBudgetItem);
  
      fs.writeFileSync("./Data/Budget.json", JSON.stringify(budget));
  
      console.log(chalk.bgGreen("Budget added successfully!!"));
}

export default addBudget