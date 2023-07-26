const getOrders = () => {
  return fetch("https://dummyjson.com/carts/1").then((res) => res.json());
};
export default getOrders;

export const getRevenue = () => {
  return fetch("https://dummyjson.com/carts").then((res) => res.json())

};
export const getInventory=()=>{
  return fetch('https://dummyjson.com/products?limit=100')
  .then(res => res.json())
}
export const getCustomer=()=>{
  return fetch('https://dummyjson.com/users?limit=100')
  .then(res => res.json())
}
export const getComments=()=>{
  return fetch('https://dummyjson.com/comments')
  .then(res => res.json())
}
