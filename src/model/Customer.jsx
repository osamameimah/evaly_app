class Customer {
    id;
    image;
    nameandemail
     phonenumber;
    createat;
    constructor(id, image,nameandemail, phonenumber, createat) {
        this.id = id;
        this.image = image;
         this.nameandemail = nameandemail;
        this.phonenumber = phonenumber;
        this.createat = createat;
    }

}

export default Customer;