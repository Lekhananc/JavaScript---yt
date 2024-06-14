const myNum = [1,2,3]

const sum = myNum.reduce((acc,curVal)=>{
    return acc-curVal;
},9)
console.log(sum);

// --------------------------------------------------------

const shoppingCart = [
    {
        itemName: 'js course',
        cost: 2999
    },
    {
        itemName: 'python course',
        cost: 999
    },
    {
        itemName: 'mobile dev course',
        cost: 5999
    },
    {
        itemName: 'data science course',
        cost: 12999
    }
]

const totalPrice = shoppingCart.reduce((acc,itemPrice)=>acc+itemPrice.cost,0)

console.log(totalPrice);
