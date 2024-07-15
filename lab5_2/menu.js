const json_menu = [
    {
        "name": "1. Home",
        "menu": [
            {
                "name": "1.1. history",
                "menu": [
                    {
                        "name": "1.2. history"
                    }
                ]
            }
        ]
    },
    {
        "name": "2. Our product",
        "menu": [
            {
                "name": "2.1. sport car",
                "menu": [
                    {
                        "name": "2.1.1. Lamborghini"
                    },
                    {
                        "name": "2.1.2. mustang"
                    }
                ]
            }
        ]
    },
    {
        "name": "3. contact us"
    }
];


console.log(json_menu[0].menu[0].name);

const letters =["A","B","C","D"];
let text = letters.join(" and ");
console.log(text);

const A = ["A", "B", "C", "D"];
const B = ["A", "B", "C", "D"];
const ans =A.concat(B);
console.log(ans);

const C = ["A", "B", "C", "D","G"];
console.log(C);


