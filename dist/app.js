import 'reflect-metadata';
import { plainToClass } from '../node_modules/class-transformer/index';
import { Product } from "./product.model";
const products = [
    { title: 'A Carpet', price: 29.99 },
    { title: 'A Book', price: 10.99 }
];
const loadedProducts = plainToClass(Product, products);
for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
//# sourceMappingURL=app.js.map