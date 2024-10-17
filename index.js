import { Command } from "commander";
import addBudget from "./addBudget.js";
import updateBudget from "./updateBudget.js";
import getSpecific from "./getSpecific.js";
import getAll from "./getAll.js";
import deleteSpecific from "./deleteSpecific.js";
const program = new Command();

program
  .name("Budget Tracker")
  .description("A CLI utility to help track your budget")
  .version("1.0.0");

/*/////////////////////////////////////////add Budget*////////////////////////////////////
program
  .command("new")
  .description("Add budget")
  .option("-t , --title <value>", "Title of the new budget to be added")
  .option("-q , --quantity <value>", "Quantity to be added in the budget")
  .option("-p , --price <value>", "Price of the item added in the budget")
  .action((options) => {
    const title = options.title;
    const quantity = options.quantity;
    const price = options.price;

//add budget
    addBudget(title,quantity,price);

    
  });

/*/////////////////////////////////////////Update budget*////////////////////////////////////
program
  .command("update")
  .description("update specified budget")
  .option("-t , --title <value>", "Title of the new budget to be added")
  .option("-q , --quantity <value>", "Quantity to be added in the budget")
  .option("-p , --price <value>", "Price of the item added in the budget")
  .action((options) => {
    const titleToUpdate = options.title;
    const quantityToUpdate = options.quantity;
    const priceToUpdate = options.price;
    //update budget
    updateBudget(titleToUpdate,quantityToUpdate,priceToUpdate);

   
  });

/*/////////////////////////////////////////get specific*////////////////////////////////////
program
  .command("getS")
  .description("Gets specific ")
  .option("-t , --title <value>", "Title of the new budget to be added")
  .action((options) => {
    const titleToUseForSpecificBudget = options.title;
    //get specific data info
    getSpecific(titleToUseForSpecificBudget)
      });

/*/////////////////////////////////////////get all*////////////////////////////////////

program
  .command("getA")
  .description("Gets all Data ")

  .action(() => {
    //get all items here
    
    getAll();
  });

/*/////////////////////////////////////////Delete specific*////////////////////////////////////
program
  .command("delete")
  .description("deletes a specific budget")
  .option("-t , --title <value>", "Title of the new budget to be added")
  .action((option) => {
    const title = option.title;
  
   deleteSpecific(title)
  });

program.parse(process.argv);
