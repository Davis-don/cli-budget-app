import {fs,chalk,loadBudget} from './imports.js'

const upDateAll = (quantityToUpdate,priceToUpdate,budget,indexOfBudget)=>{
    
    budget[indexOfBudget].quantity = quantityToUpdate;
    budget[indexOfBudget].price = priceToUpdate;
    fs.writeFileSync("./Data/Budget.json", JSON.stringify(budget));
    console.log(chalk.bgGreen("Entire budget updated successfully!!"));
}
export default upDateAll;