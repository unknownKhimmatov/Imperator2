import {
    createSlice
} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        total: 0,
        basket: []
    },
    reducers: {
        addToCard: (state, action) => {
            let newState = {
                ...state
            };
            const isHas = newState.basket.some((i) => i.id === action.payload.id);
            console.log(isHas);
            if (isHas) {
                newState = {
                    ...newState,
                };
            } else {
                newState = {
                    ...newState,
                    basket: [...newState.basket, action.payload],
                };
            }
            return newState;
        },
        addCountPlus: (state, action) => ({
            ...state,
            total: state.total + action.payload.price,
            basket: state.basket.map(i => i.id !== action.payload.id ? i : {
                ...i,
                counter: i.counter + 1
            })
        }),
        addCountMinus: (state, action) => ({
            ...state,
            total: state.total - action.payload.price,
            basket: state.basket.map(i => i.id !== action.payload.id ? i : {
                ...i,
                counter: i.counter - 1
            })
        }),
        removeItem: (state, action) => {
            return {
                ...state,
                basket: state.basket.filter(i => i.id !== action.payload)
            }
        }
    },
});
export const {
    addToCard,
    total,
    addCountPlus,
    addCountMinus,
    removeItem,
    basket
} = cartSlice.actions;


export default cartSlice.reducer;