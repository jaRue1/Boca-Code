class Product {
  constructor(prodName) {
    this.name = prodName
  }
  display() {
    return `This is a ${this.name} `
  }
  getProdName(){
    return this.name
  }
}
class Item extends Product {
  constructor(prodName, sku, style, qty) {
    super(prodName)
    this.sku = sku
    this.style = style
    this.qty = qty
  }
  itemDisplay() {
    console.log(this.display() + this.sku + " " + this.qty)
  }
  sellSome(qtySold) {
    this.qty -= qtySold
  }
  buySome(qtyBuy) {
    this.qty += qtyBuy
  }
}

let prod1 = new Product("Shirt")
console.log("----------Parent Class Object-----------")
prod1.display()
console.log(prod1.display())
let item1 = new Item("Ski Mask", "TKL", "Large", 10)
console.log("----------Child Class Object-----------")
item1.sellSome(3)
item1.buySome(4)
item1.itemDisplay()
console.log("---------- Item Attributes -----------")
//why is this undefined?
console.log("item name  ", item1.getProdName(), " Derived from the parent class")
console.log("item style ", item1.style)
console.log("item qty   ", item1.qty)
