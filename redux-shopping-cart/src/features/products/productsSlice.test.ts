import productsReducer, { receivedProducts } from './productsSlice';
import products from "../../../public/products.json"

describe('products reducer', () => {

    it('should return the initial state when passed an empty action', () => {
        const initialState = undefined;
        const action = {type: ""};
        const result = productsReducer(initialState, action);
        expect(result).toEqual({products: {}});
    });

    it('should convert the products recieved to an object', () => {
        const initialState = undefined;
        const action = receivedProducts(products);
        const result = productsReducer(initialState, action);
        expect(Object.keys(result.products).length).toEqual(products.length);
        products.forEach(product => {
            expect(result.products[product.id]).toEqual(product);
        });
    });
    it("should not allow duplicate products", () => {
        const initialState = undefined;
        const action = receivedProducts(products);
        const result = productsReducer(initialState, action);
        const action2 = receivedProducts(products);
        const result2 = productsReducer(result, action2);
        expect(Object.keys(result2.products).length).toEqual(products.length);
        products.forEach(product => {
            expect(result2.products[product.id]).toEqual(product);
        });
    });    
    
    it("should allow different products to be recieved at different times", () => {
        const initialState = undefined;
        const action = receivedProducts(products);
        const result = productsReducer(initialState, action);
        const action2 = receivedProducts(products.slice(0, 1));
        const result2 = productsReducer(result, action2);
        expect(Object.keys(result2.products).length).toEqual(products.length);
        products.forEach(product => {
            expect(result2.products[product.id]).toEqual(product);
            }
        );
    });
});
