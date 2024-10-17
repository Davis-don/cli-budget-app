import {fs,chalk} from './imports.js'

const upDatePrice=(priceToUpdate,budget,indexOfBudget)=>{
    budget[indexOfBudget].price = priceToUpdate;
    fs.writeFileSync("./Data/Budget.json", JSON.stringify(budget));
    console.log(chalk.bgGreen("price updated successfully"));
}
export default upDatePrice;