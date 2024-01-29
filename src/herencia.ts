abstract class BasicData {
  constructor(
    protected _id: number,
    public created_at: Date,
    public created_by: string,
    public description: string
  ) {}

  get fullYear() {
    return this.created_at.getFullYear();
  }
  abstract save():void


}




class Product extends BasicData {
  constructor(
    public stock: number,
    public ref: number,
    _id: number,
    created_at: Date,
    created_by: string,
    description: string,
  ) {
    super(_id, created_at, created_by, description);
   
  }

  save(){}
}

const productOne = new Product(5, 23142, 5, new Date(), "lucia" ,"un platano")

class Category extends BasicData {
    public products: Product[] = []
    constructor(
      public stock: number,
      public ref: number,
      _id: number,
      created_at: Date,
      created_by: string,
      description: string,
    ) {
      super(_id, created_at, created_by, description);
    }
    save(){}
  }

  const category = new Category(3, 32341234, 34, new Date(), "lucia", "a thing")

  console.log(productOne)
  console.log(category)