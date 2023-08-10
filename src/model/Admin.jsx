class Admin {
    id;
    image;
    name;
    number;
    email;
    address;
    created_at;

    constructor(id, image, name, number, email, address, created_at) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.number = number;
        this.email = email;
        this.address = address;
        this.created_at = created_at;
    }
}

export default Admin;