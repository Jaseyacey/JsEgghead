import cartReducer, { addToCart, CartState, removeFromCart } from './cartSlice'

describe('cart reducer', () => {
    test('an empty action', () => {
        const initialState = undefined;
        const action = { type: '' };
        const state = cartReducer(initialState, action);
        expect(state).toEqual({
            checkoutState: 'READY',
            errorMessage: '',
            items: {}
        })
    })
    test('add to cart', () => {
        const initialState = undefined;
        const action = addToCart("abc")
        let state = cartReducer(initialState, action);
        expect(state).toEqual({
            checkoutState: 'READY',
            errorMessage: '',
            items: { abc: 1 }
        })
    })
    test('remove from cart', () => {
        const initialState = undefined;
        const action = removeFromCart("abc")
        let state = cartReducer(initialState, action);
        expect(state).toEqual({
            checkoutState: 'READY',
            errorMessage: '',
            items: { abc: 1 }
        })
    });
    test.todo('update quantity')
});