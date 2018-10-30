import * as types from './actionsTypes';

export const addToCart = (product, quantity) => ({
    type: types.ADD_TO_CART,
    product: product,
    quantity: quantity,
});

export const removeFromCart = (productId) => ({
    type: types.REMOVE_FROM_CART,
    productId: productId,
});