import fs from "fs";


const loadBudget = (path)=>{
    const loadedBudget = fs.readFileSync(path,"utf8"); 
    if(loadBudget){
        return JSON.parse(loadedBudget)
    }
    return [];
}

export default loadBudget;