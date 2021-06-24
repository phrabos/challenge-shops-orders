class Shop {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Order {
  constructor(shopId, amount, month, fulfilled) {
    this.shopId = shopId;
    this.amount = amount;
    this.month = month;
    this.fulfilled = fulfilled;
  }
}

const allShops = [
  new Shop(1, "Atlantis"), // {id: 1, name: Atlantis}
  new Shop(2, "Rustic Range"), 
  new Shop(3, "Golden Apple"),
  new Shop(4, "Cascade Corner")
];

const allOrders = [
  new Order(1, 230, 5, true),
  new Order(1, 145, 5, true),
  new Order(1, 600, 6, false),
  new Order(2, 55, 5, true),
  new Order(2, 39, 6, false),
  new Order(3, 180, 5, true),
  new Order(3, 490, 5, true),
  new Order(3, 1250, 5, true),
  new Order(3, 480, 6, true),
  new Order(3, 535, 6, false),
  new Order(3, 499, 6, false),
  new Order(4, 300, 5, true),
  new Order(4, 275, 5, true),
  new Order(4, 35, 6, false),
  new Order(4, 79, 6, false)
];
// Your employer has multiple shops with associated orders.
// In order to get better insights into their sales operations
// you have been tasked with getting some reporting statistics
// from their sales data.

// See class definitions above for data structure.

// 1a. Display the names of the shops

// 1b. Display the sum of the shop's fulfilled orders after the name

// 2. Display the name of the shop that has the largest unfulfilled order

// 3. Display the name of the shop that had the least orders in May

// Put your code here

// 1a. Display the names of the shops
// allShops.forEach(shop => console.log(shop.name))

// 1b. Display the sum of the shop's fulfilled orders after the name
function fulfilledOrders(){
  const result = {}
  for (shop of allShops){
    for (order of allOrders){
      if(shop.id === order.shopId){
        // console.log(result[shop.name])
        result[shop.name] ? 
          result[shop.name] += order.amount
          : result[shop.name] = order.amount
      }
    }
  }
  return result
}
// console.log(fulfilledOrders())

function largestUnfullfilled(){

  const unfulfilled = allOrders.filter((order) => !order.fulfilled)
  console.log(unfulfilled)
  const largest = unfulfilled.sort((a, b) => b.amount - a.amount)[0]
  console.log(largest)
  const largestShop = allShops.find(shop => shop.id === largest.shopId)
  return largestShop.name
}
// console.log(largestUnfullfilled())

function leastMayOrders(){
  const mayOrders = allOrders.filter(order => order.month === 5) 
  // console.log(mayOrders)
  const shop = mayOrders.reduce((acc, { shopId }) =>{
    if(acc[shopId]){
      acc[shopId] += 1
    }else acc[shopId] = 1
    return acc;
  }, {});

  const resArr = []
  for(let num in shop){
    resArr.push(num)
  }
  const result = resArr.sort((a, b) => shop[a] - shop[b])[0]

  const {name} = allShops.find(shop => shop.id === +result)


  return name;
}
console.log(leastMayOrders())