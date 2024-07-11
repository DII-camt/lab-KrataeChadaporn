let hanoi = (n,a,c,b) =>{

    if(n === 0){
        return;
    }
    hanoi(n-1,a,b,c);
    console.log(a+'->'+c);
    hanoi(n-1,b,c,a);
};

let value = 4;
hanoi(value,'a','b','c');
