let orderCount = 0;
const takeOrder = (topping, crustType) => {
  console.log(crustType + ' crust pizza topped with ' + topping);
  orderCount++;
  const cost = orderCount * 7.50;
  return cost;
}

const getSubTotal = (itemCount) => {
  return itemCount * 7.5;
}

const getTax = (orderCount) => {
  return getSubTotal(orderCount) * (0.06);
}

const getTotal = () => {
  return getSubTotal(orderCount) + getTax(orderCount);
}

takeOrder('mushroom', 'thin');
takeOrder('pineapple', 'thick');
takeOrder('tomato', 'deep pan');

console.log(getTotal());
