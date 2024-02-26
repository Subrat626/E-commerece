import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.items =  state.items.filter(e=>e.id !== action.payload.id)
        },
        updateItem: (state, action) => {
            const { id, quantity } = action.payload;
            state.items = state.items.map(item => {
                if (item.id === id) {
                    return { ...item, quantity: (action.type === "addToCart" ? item.quantity + quantity : quantity) };
                }
                return item;
            });
            console.log(state.items)
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})

export const {addItem,removeItem,updateItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;