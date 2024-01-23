//for add to item
export const addCart = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};
//for delete item from cart
export const deleteCart = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};
