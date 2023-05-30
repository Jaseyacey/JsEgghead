import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { CartLink } from "./CartLink";
import { store } from "../../app/store";
import cartReducer, { getTotalPrice, addToCart, CartState, removeFromCart, updateQuantity, getMemoizedNumItems, checkoutCart } from './cartSlice'

test("should contain a link", () => {
    renderWithContext(<CartLink />);
    expect(screen.getByRole("link")).toBeInTheDocument();
});
test('should show text when there are no items', () => {
    renderWithContext(<CartLink />);
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('Cart')
    expect(link).not.toHaveTextContent('0')
    expect(link).not.toHaveTextContent('1')
});
test('should show the correct num of items', () => {
    store.dispatch(addToCart('TestItem'));
    renderWithContext(<CartLink />)
    const link = screen.getByRole('link');
    expect(link).toHaveTextContent('1')
});

function renderWithContext(element: React.ReactElement) {
    render(
        <Provider store={store}>
            <Router>{element}</Router>
        </Provider>
    );
}