// Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции.
var productsCheck = [
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
function printCheck(productsCheck) {
    var buf = '';
    buf += '<ul>';
    for (var _i = 0, productsCheck_1 = productsCheck; _i < productsCheck_1.length; _i++) {
        var product = productsCheck_1[_i];
        buf += "<li>" + product.name + ": " + product.count + " = " + product.count * product.price + "</li>";
    }
    buf += '</ul>';
    document.write(buf);
}
;
printCheck(productsCheck);
// - Подсчет общей суммы покупки.
function sumCheck(productsCheck) {
    var sum = 0;
    var buf = '';
    buf += '<ul>';
    for (var _i = 0, productsCheck_2 = productsCheck; _i < productsCheck_2.length; _i++) {
        var sumPrice = productsCheck_2[_i];
        sum += sumPrice.count * sumPrice.price;
        buf = "<li>sum = " + sum + "</li>";
    }
    buf += '</ul>';
    document.write(buf);
}
;
sumCheck(productsCheck);
// - Получение самой дорогой покупки в чеке.
function maxPrice(productsCheck) {
    var maxPrice = null;
    var buf = '';
    buf += '<ul>';
    for (var _i = 0, productsCheck_3 = productsCheck; _i < productsCheck_3.length; _i++) {
        var max = productsCheck_3[_i];
        if (!maxPrice) {
            maxPrice = max.count * max.price;
        }
        else if (max.count * max.price > maxPrice) {
            maxPrice = max.count * max.price;
        }
    }
    buf = "<li>max price = " + maxPrice + "</li>";
    buf += '</ul>';
    document.write(buf);
}
;
maxPrice(productsCheck);
// - Подсчет средней стоимости одного товара в чеке.
function averagePrice(productsCheck) {
    var averagePrice = null;
    var maxPrice = 0;
    var quantity = 0;
    var buf = '';
    buf += '<ul>';
    for (var _i = 0, productsCheck_4 = productsCheck; _i < productsCheck_4.length; _i++) {
        var max = productsCheck_4[_i];
        maxPrice += max.count * max.price;
        quantity++;
    }
    averagePrice = maxPrice / quantity;
    buf = "<li>average price = " + Math.round(averagePrice) + "</li>";
    buf += '</ul>';
    document.write(buf);
}
;
averagePrice(productsCheck);
