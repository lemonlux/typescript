class BasicData {
  constructor(
    private _id: number,
    public created_at: Date,
    public created_by: "string",
    public description: "string"
  ) {}

  get fullYear() {
    return this.created_at.getFullYear();
  }
}

class Product extends BasicData {
  constructor(
    public stock: number,
    public ref: number,
    _id: number,
    created_at: Date,
    created_by: "string",
    description: "string"
  ) {
    super(_id, created_at, created_by, description);
  }
}
