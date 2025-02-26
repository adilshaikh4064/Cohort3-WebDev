
let currentClock;
const searchBackend=function(){
    console.log('search backend function get called !');
    clearInterval(currentClock);
    currentClock=undefined;
}

const useDebounce=function(){
    if(currentClock) return;
    currentClock=setTimeout(function(){
        searchBackend();
    },[3000]);
}

export default useDebounce;