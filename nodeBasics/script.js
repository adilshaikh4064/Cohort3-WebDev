const fs=require(`fs`);
const filename=`/Users/adilshaikh/Desktop/cohort/nodeBasics/todos.json`

let data=fs.readFileSync(filename,`utf-8`);
let todosArray=JSON.parse(data);


todosArray.push({name:`adil`,description:`this is my task`,done:false});
data=JSON.stringify(todosArray,null,4);
console.log(data);

'{"name":"amir","description":"this is me","done":false}'
'{"name":"akbar","description":"this is me","done":false}'
'{"name":"anshu","description":"this is me","done":false}'