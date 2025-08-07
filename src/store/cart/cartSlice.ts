import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../data/products'

export interface CartItem extends Product{
	quantity: number
	selectedSize:string
}

export interface CartState{
	items:CartItem[]
}

const initialState:CartState={
	items:[]
}

const cartSlice=createSlice({
	name:'cart',
	initialState,
	reducers:{
		addToCart(state,action:PayloadAction<{product:Product;size:string}>)
	 {
		const {product,size}=action.payload
		const existingItem=state.items.find(item=>item.id===product.id && item.selectedSize===size)

		if(existingItem){
			existingItem.quantity++
		}else{
			state.items.push({...product,quantity:1,selectedSize:size})
		}
	 },
	 removeFromCart(state, action: PayloadAction<{ id: number; size: string }>) {
		const {id,size}=action.payload;
		state.items=state.items.filter(
			(item)=>!(item.id===id&& item.selectedSize===size)
		)
		},
		decrementQuantity(state,action:PayloadAction<{id:number;size:string}>){
			const {id,size}=action.payload;
			const existingItem=state.items.find(
				(item)=>item.id===id && item.selectedSize===size
			);
			if(existingItem && existingItem.quantity>1){
				existingItem.quantity--;
			}
		}
	}
})

export const {addToCart, removeFromCart, decrementQuantity}=cartSlice.actions
export default cartSlice.reducer