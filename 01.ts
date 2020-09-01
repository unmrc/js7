// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// - Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

interface product {
    name: string,
    count: number,
    buy: boolean
}
let products: product[] = [
    {
        name: 'apple',
        count: 3,
        buy: true
    },
    {
        name: 'orange',
        count: 0,
        buy: false
    },
    {
        name: 'tomato',
        count: 5,
        buy: true
    }
];

let sorted = products.sort((a, b) => {
    if ((a.buy == true && b.buy == true) || (a.buy == false && b.buy == false)) {
        return 0;
    }
    if (a.buy == true && b.buy == false) {
        return -1;
    }
    if (a.buy == false && b.buy == true) {
        return 1;   
    }
});

console.log(sorted);

// - Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.

function addProduct() {
    let newProductName = prompt('Введите имя продукта:'),
    newProduct = true;
    for (const product of products) {
        if (product.name == newProductName) {
            product.count++;
            newProduct = false;
        }
    }
    if (newProduct) {
        products.push({
            name: newProductName,
            count: 1,
            buy: true
        });
    }
};

console.log(addProduct());

// - Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function addNewProduct() {
    let newProductName = prompt('Введите имя продукта:'),
    newProduct = true;
    for (const product of products) {
        if (product.name == newProductName) {
            product.buy = true;
            newProduct = false;
        }
    }
};

console.log(addNewProduct());
