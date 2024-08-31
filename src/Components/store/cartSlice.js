import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cart: [],
 TotalAmount: 0,

};
const cartSlice = createSlice({
  name: "cart",
  initialState,
 
 
  reducers: {
    add(state, action) {
       let newItem = action.payload
     console.log(state.cart)
       let existingItem = state.cart.find((item)=>{ return item.id === newItem.id})
       
if(!existingItem){
state.cart.push({
  id: newItem.id,
  image: newItem.image,
  title: newItem.title,
  price: newItem.price,
  description: newItem.description,
  totalPrice: 0,
  quantity: newItem.quantity
})
state.TotalAmount+=newItem.price


}else{
  existingItem.quantity++;
  existingItem.totalPrice+=newItem.price
  state.TotalAmount+=newItem.price

}
    },
    remove(state, action) {
     let newItem = action.payload
     
     let existingItem = state.cart.find((item)=>{ return item.id === newItem.id})
   
     if(existingItem){
      if(existingItem.quantity>1){
        existingItem.quantity--
        existingItem.totalPrice-=newItem.price
        state.TotalAmount-=newItem.price
      }
      
      else{
        state.cart = state.cart.filter((item)=>{return(item.id !== existingItem.id)})
        state.TotalAmount-=newItem.price
    
      }
     }}

      ,
    removeFromCart(state, action){
      let newItem = action.payload
     
     let existingItem = state.cart.find((item)=>{ return item.id === newItem.id})
     if(existingItem){
      state.cart = state.cart.filter((item)=>{return(item.id !== existingItem.id)})
      state.TotalAmount -=(newItem.price+existingItem.totalPrice)
     }

  }
}});

export default cartSlice.reducer;
export const { add, remove, removeFromCart } = cartSlice.actions;