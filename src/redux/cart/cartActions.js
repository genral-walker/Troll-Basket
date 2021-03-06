
import cartActionTypes from './cartActionTypes'

export const addToCart = productID => ({
    type: cartActionTypes.CART_ADDED,
    payload: productID
});

export const IncrementQuantity = productID => ({
    type: cartActionTypes.CART_INCREMENTED,
    payload: productID
});

export const decrementQuantity = productID => ({
    type: cartActionTypes.CART_DECREMENTED,
    payload: productID
});

export const deleteProduct = productID => ({
    type: cartActionTypes.CART_DELETED,
    payload: productID
});

export const stockFinished = boolean => ({
    type: cartActionTypes.STOCK_FINISHED,
    payload: boolean
});

export const showPopUp = () => ({ type: cartActionTypes.SHOW_POP_UP });

export const hidePopUp = () => ({ type: cartActionTypes.HIDE_POP_UP });