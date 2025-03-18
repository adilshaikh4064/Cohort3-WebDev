interface People{
    name:string,
    age:number,
    greet:()=>string,
    meet():string
}

let user:People={
    name:'adil shaikh',
    age:24,
    greet:function(){
        return `hi ${this.name}`;
    },
    meet:function(){
        return `nice to meet ${this.name}`
    }
}


console.log(user.greet());
console.log(user.meet());