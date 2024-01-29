"use strict";
class BasicData {
    constructor(_id, created_at, created_by, description) {
        this._id = _id;
        this.created_at = created_at;
        this.created_by = created_by;
        this.description = description;
    }
    get fullYear() {
        return this.created_at.getFullYear();
    }
}
let datos = new BasicData(5, new Date(), "lucia", "nueva isntancia");
console.log(datos);
class Product extends BasicData {
    constructor(stock, ref, _id, created_at, created_by, description) {
        super(_id, created_at, created_by, description);
        this.stock = stock;
        this.ref = ref;
    }
}
const productOne = new Product(5, 23142, 5, new Date(), "lucia", "un platano");
class Category extends BasicData {
    constructor(stock, ref, _id, created_at, created_by, description) {
        super(_id, created_at, created_by, description);
        this.stock = stock;
        this.ref = ref;
        this.products = [];
    }
}
const category = new Category(3, 32341234, 34, new Date(), "lucia", "a thing");
console.log(productOne);
console.log(category);
//# sourceMappingURL=herencia.js.map