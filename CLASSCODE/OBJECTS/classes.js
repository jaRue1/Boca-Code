class Product{
  constructor(prodName){
    this.name = prodName
  }
  display(){
    return`This is , ${this.name} `
  }
}
class Item extends Product{
  constructor(prodName, sku, style , qty ){
  super(prodName)
  this.sku = sku
  this.style = style
  this.qty = qty
  }
  itemDisplay(){
    console.log(this.display() + this.sku +' '+ this.qty)
  }
  sellSome(qtySold){
    this.qty -= qtySold
  }
  buySome(qtyBuy){
    this.qty += qtyBuy
  }
}

let prod1 = new Product('Shirt')
prod1.display()
let item1 = new Item('Ski Mask','TKL','Large', 10)
item1.sellSome(3)
item1.buySome(4)
item1.itemDisplay()
