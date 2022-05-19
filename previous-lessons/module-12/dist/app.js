import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { Product } from './product.model';
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
];
const newProd = new Product('', -5.99);
console.log(newProd.getInformation());
const loadedProducts = plainToClass(Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
//# sourceMappingURL=app.js.map