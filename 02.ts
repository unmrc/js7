// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.

interface check {
    name: string,
    count: number,
    price: number
}
let productsCheck: check[] = [
    {
        name: 'apple',
        count: 3,
        price: 100
    },
    {
        name: 'orange',
        count: 0,
        price: 50
    },
    {
        name: 'tomato',
        count: 5,
        price: 200
    }
];

// - Распечатка чека на экран.
function printCheck(productsCheck: check[]) {
    let buf: string = '';
    buf+= '<ul>';
    for (const product of productsCheck) {
        buf += `<li>${product.name}: ${product.count} = ${product.count * product.price}</li>`;
    }
    buf+= '</ul>';
    document.write(buf);
};

printCheck(productsCheck);

// - Подсчет общей суммы покупки.
function sumCheck(productsCheck: check[]) {
    let sum = 0
    let buf: string = '';
    buf+= '<ul>';
    for (const sumPrice of productsCheck) {
        sum += sumPrice.count * sumPrice.price
        buf = `<li>sum = ${sum}</li>`;
    }
    buf+= '</ul>';
    document.write(buf);
};

sumCheck(productsCheck);

// - Получение самой дорогой покупки в чеке.
function maxPrice(productsCheck: check[]) {
    let maxPrice: number = null;
    let buf: string = '';
    buf+= '<ul>';
    for (const max of productsCheck) {
        if (!maxPrice) {
            maxPrice = max.count * max.price;
        } else if (max.count * max.price > maxPrice){
            maxPrice = max.count * max.price;
        }
     }
    buf = `<li>max price = ${maxPrice}</li>`;
    buf+= '</ul>';
    document.write(buf);
};

maxPrice(productsCheck);

// - Подсчет средней стоимости одного товара в чеке.

function averagePrice(productsCheck: check[]) {
    let averagePrice: number = null;
    let maxPrice = 0;
    let quantity = 0;
    let buf: string = '';
    buf+= '<ul>';
    for (const product of productsCheck) {
            maxPrice += product.count * product.price;
            quantity++;
     }
     averagePrice = maxPrice / quantity;
    buf = `<li>average price = ${Math.round(averagePrice)}</li>`;
    buf+= '</ul>';
    document.write(buf);
};

averagePrice(productsCheck);