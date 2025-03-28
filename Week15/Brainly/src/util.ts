export const generateUniqueHash=function(len:number){
    const str='qwertyuiopasdfghjklzxcvbnm1234567890'
    const length=str.length;

    let ans="";
    for(let i=0; i<len; i++){
        ans+= str[Math.floor(Math.random()*length)]
    }

    return ans;
}