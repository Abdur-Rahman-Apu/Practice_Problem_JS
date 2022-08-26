const product = [
    { id: 1, item: 'mobile', price: 10000 },
    { id: 2, item: 'laptop', price: 30000 },
    { id: 3, item: 'Iphone', price: 40000 },
    { id: 4, item: 'Earphone', price: 5000 }
];

const findPrice = product.find(x => x.price === 5000);

console.log(findPrice);