class Product {
    id;
    name;
    description;
    shortdescription;
    price;
    category;
    image
    constructor(id, name, description, shortdescription, price, category, image) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.shortdescription = shortdescription;
        this.price = price;
        this.category = category;
        this.image = image;
    }

}

export default Product;