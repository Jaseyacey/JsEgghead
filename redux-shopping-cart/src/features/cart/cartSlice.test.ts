import cartReducer, { getTotalPrice, addToCart, CartState, removeFromCart, updateQuantity, getMemoizedNumItems, checkoutCart } from './cartSlice'
import type { RootState } from '../../app/store';
import products from '../../../public/products.json';
import * as api from '../../app/api';

jest.mock('../../app/api', () => {
// MOCK THE `getProducts` FUNCTION
    return {
        async getProducts() {
    // RETURN AN EMPTY ARRAY OF `getProducts`
            return []
        },
        async checkout(items: api.CartItems = {}) {
    // Check if the `ITEMS` object is empty
            const empty = Object.keys(items).length === 0;
            if (empty) {
    // Throw an error if the `ITEMS` object is empty
                throw new Error("Must include cart items");
            }
            if (items.badItem > 0) {
    // Return an error if the `ITEMS` object contains a bad item
                return { success: false };
            }
    // Return a successful response 
            return { success: true }
        }
    }
})

describe('cart reducer', () => {
// Test the initial state of the cart reducer
    test('an empty action', () => {
// assigning the state to be undefined
        const initialState = undefined;
// assigning the action to be an empty object        
        const action = { type: '' };
// calling the cartReducer function with the initial state and the empty action
        const state = cartReducer(initialState, action);
// asserting that the state returned by the reducer matches the expected state
        expect(state).toEqual({
            checkoutState: 'READY',
            errorMessage: '',
            items: {}
        })
    })
// Test the addToCart reducer function
    test('add to cart', () => {
        const initialState = undefined;
        const action = addToCart("abc")
        let state = cartReducer(initialState, action);
// Assert that the state returned by the reducer matches the expected state
        expect(state).toEqual({
            checkoutState: 'READY',
            errorMessage: '',
            items: { abc: 1 }
        })
    })
// Test the removeFromCart reducer function
    test("removeFromCart", () => {
        const initialState: CartState = {
            checkoutState: "READY",
            errorMessage: "",
            items: { abc: 1, def: 3 },
        };
// Create a removeFromCart action for item "abc"
        const action = removeFromCart("abc");
        const state = cartReducer(initialState, action);
// Assert that the state returned by the reducer matches the expected state
        expect(state).toEqual({
            checkoutState: "READY",
            errorMessage: "",
            items: { def: 3 },
        });
    });

// Set up the initial state of the cart slice of the Redux store
    test("updateQuantity", () => {
        const initialState: CartState = {
            checkoutState: "READY",
            errorMessage: "",
            items: { abc: 1, def: 3 },
        };
// Create an updateQuantity action for item "def" with a quantity of 5
        const action = updateQuantity({ id: "def", quantity: 5 });
// Call the cartReducer function with the initial state and the updateQuantity action
        const state = cartReducer(initialState, action);
// Assert that the state returned by the reducer matches the expected state
        expect(state).toEqual({
            checkoutState: "READY",
            errorMessage: "",
            items: { abc: 1, def: 5 },
        });
    });

// Test the checkoutCart reducer function
    describe("selectors", () => {
// Test the getMemoizedNumItems selector function
        describe("getMemoizedNumItems", () => {
// Test the getMemoizedNumItems selector function to have 0 items
            it("should return 0 with no items", () => {
                const cart: CartState = {
                    checkoutState: "READY",
                    errorMessage: "",
                    items: {},
                };
                const result = getMemoizedNumItems({ cart } as RootState);
    // Assert that the result of the selector function is 0
                expect(result).toEqual(0);
            });

// Test the getMemoizedNumItems selector function to have 6 items            
            it("should add up the total", () => {
                const cart: CartState = {
                    checkoutState: "READY",
                    errorMessage: "",
                    items: { abc: 3, def: 3 },
                };
                const result = getMemoizedNumItems({ cart } as RootState);
// Assert that the result of the selector function is 6
                expect(result).toEqual(6);
            });
// Test the getMemoizedNumItems selector function to have 6 items
            it("should not compute again with the same state", () => {
                const cart: CartState = {
                    checkoutState: "READY",
                    errorMessage: "",
                    items: { abc: 3, def: 3 },
                };
    // Reset the number of recomputations
                getMemoizedNumItems.resetRecomputations();
                getMemoizedNumItems({ cart } as RootState);
    // Assert that the number of recomputations is 1
                expect(getMemoizedNumItems.recomputations()).toEqual(1);
                getMemoizedNumItems({ cart } as RootState);
    // Assert that the number of recomputations is still 1
                expect(getMemoizedNumItems.recomputations()).toEqual(1);
    // Assert that the number of recomputations is still 1
                getMemoizedNumItems({ cart } as RootState);
                getMemoizedNumItems({ cart } as RootState);
                getMemoizedNumItems({ cart } as RootState);
        // Assert that the number of recomputations is still 1
                expect(getMemoizedNumItems.recomputations()).toEqual(1);
            });
    // Test the getMemoizedNumItems selector function to have 6 items
            it("should recompute with new state", () => {
                const cart: CartState = {
                    checkoutState: "READY",
                    errorMessage: "",
                    items: { abc: 3, def: 3 },
                };
                getMemoizedNumItems.resetRecomputations();
                getMemoizedNumItems({ cart } as RootState);
    // Assert that the number of recomputations is 1
                expect(getMemoizedNumItems.recomputations()).toEqual(1);
                cart.items = { abc: 2 };
                getMemoizedNumItems({ cart } as RootState);
    // Assert that the number of recomputations is 2
                expect(getMemoizedNumItems.recomputations()).toEqual(2);
            });
        });
    });

    
    describe('getTotalPrice', () => {
        it('should return 0 with an empty cart', () => {
            const state: RootState = {
                cart: { checkoutState: "READY", errorMessage: '', items: {} },
                products: { products: {} }
            }
            const result = getTotalPrice(state)
            expect(result).toEqual('0.00')
        });

// Test the getTotalPrice selector function to be equal to two products added up
        it('should add up the totals', () => {
// Setting the state of the the cart and products
            const state: RootState = {
                cart: {
                    checkoutState: "READY", errorMessage: '', items: {
                        [products[0].id]: 3,
                        [products[1].id]: 4,
                    }
                },
                products: {
                    products: {
                        [products[0].id]: products[0],
                        [products[1].id]: products[1],
                    }
                }
            }
            const result = getTotalPrice(state);
// Assert that the result of the two products added up is = to the two products added up
            expect(result).toEqual('43.23');
        });

// Test the getTotalPrice selector function to not compute again with the same state
        it('should not compute again with the same state', () => {
            const state: RootState = {
                cart: {
                    checkoutState: "READY", errorMessage: '', items: {
                        [products[0].id]: 3,
                        [products[1].id]: 4,
                    }
                },
                products: {
                    products: {
                        [products[0].id]: products[0],
                        [products[1].id]: products[1],
                    }
                }
            }
// Reset the number of recomputations
            getTotalPrice.resetRecomputations()
            const result = getTotalPrice(state);
// Assert that the result of the two products added up is = to the two products added up
            expect(result).toEqual('43.23');
            expect(getTotalPrice.recomputations()).toEqual(1)
            getTotalPrice(state)
            expect(getTotalPrice.recomputations()).toEqual(1)
        })
// Test the getTotalPrice selector function to recompute with new products
        it("should recompute with new products", () => {
            const state: RootState = {
                cart: {
                    checkoutState: "READY",
                    errorMessage: "",
                    items: {
                        [products[0].id]: 3,
                        [products[1].id]: 4,
                    },
                },
                products: {
                    products: {
                        [products[0].id]: products[0],
                        [products[1].id]: products[1],
                    },
                },
            };
            getTotalPrice.resetRecomputations();
            let result = getTotalPrice(state);
// Assert that the result of the two products added up is = to the two products added up
            expect(result).toEqual("43.23");
            expect(getTotalPrice.recomputations()).toEqual(1);
            state.products.products = {
                [products[0].id]: products[0],
                [products[1].id]: products[1],
                [products[2].id]: products[2],
            };
            result = getTotalPrice({ ...state });
            expect(result).toEqual("43.23");
            expect(getTotalPrice.recomputations()).toEqual(2);
        });

        it("should recompute when cart changes", () => {
            const state: RootState = {
                cart: {
                    checkoutState: "READY",
                    errorMessage: "",
                    items: {
                        [products[0].id]: 3,
                        [products[1].id]: 4,
                    },
                },
                products: {
                    products: {
                        [products[0].id]: products[0],
                        [products[1].id]: products[1],
                    },
                },
            };
            getTotalPrice.resetRecomputations();
            let result = getTotalPrice(state);
            expect(result).toEqual("43.23");
            expect(getTotalPrice.recomputations()).toEqual(1);
            state.cart.items = {};
            result = getTotalPrice({ ...state });
            expect(result).toEqual("0.00");
            expect(getTotalPrice.recomputations()).toEqual(2);
        });
    });
});

describe('thunks', () => {
    describe('checkoutCart w/mocked dispatch', () => {
        it('should checkout', async () => {
            const dispatch = jest.fn();
            const state: RootState = {
                products: { products: {} },
                cart: { checkoutState: 'READY', errorMessage: '', items: { abc: 1, } }
            }
            const thunk = checkoutCart();
            await thunk(dispatch, () => state, undefined);
            const { calls } = dispatch.mock;
            expect(calls).toHaveLength(2)
        })
        it('should fail with no items', async() => {
            // TODO
            const dispatch = jest.fn();
            const state: RootState = {
                products: { products: {} },
                cart: { checkoutState: 'READY', errorMessage: '', items: {} }
            }
            const thunk = checkoutCart();
            await thunk(dispatch, () => state, undefined);
            const { calls } = dispatch.mock;
            expect(calls).toHaveLength(2)

        })
    })
})