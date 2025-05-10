import {products} from "./data/handlbares.json"
import createList from "./templates/handlebars-templates.hbs"
const result = createList({products});
document.querySelector(".box").innerHTML = result;
console.log(result)

