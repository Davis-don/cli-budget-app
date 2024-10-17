import {fs,chalk,loadBudget} from './imports.js'
import updateQuatity from './updateQuantity.js';
import upDatePrice from './updatePrice.js';
import upDateAll from './updateAll.js';

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
// //check defination
if(quantityToUpdate == undefined && priceToUpdate == undefined){
  console.log(chalk.bgBlue("please add content to update "))
 return;
}
else if(quantityToUpdate !=undefined && priceToUpdate == undefined){
  //update quantity
  updateQuatity(quantityToUpdate,indexOfBudget,budget)
  
}
else if(quantityToUpdate == undefined && priceToUpdate != undefined){
  //update price
  upDatePrice(priceToUpdate,budget,indexOfBudget);
}
else{
  //modify the content
  upDateAll(quantityToUpdate,priceToUpdate,budget,indexOfBudget)
 
}







 
}
export default updateBudget;