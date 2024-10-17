import {fs,chalk} from './imports.js'

const updateQuatity=(quantityToUpdate,indexOfBudget,budget)=>{
    budget[indexOfBudget].quantity = quantityToUpdate;
    fs.writeFileSync("./Data/Budget.json", JSON.stringify(budget));
    console.log(chalk.bgGreen("Quantity updated successfully"));
}
export default updateQuatity;