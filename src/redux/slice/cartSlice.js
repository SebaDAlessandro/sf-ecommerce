import { createSlice } from '@reduxjs/toolkit'

/* function configResult(price) {
    const formatPeso = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARG",
      minimumFractionDigits: 0,
    });
    let valor = formatPeso.format(price);
    return valor;
} */

const cartSlice = createSlice({
   name: 'cart',
   initialState:[],
   reducers: {
        INCREMENT: (state,action) => {
            const { item, quantity } = action.payload
            //preguntamos si ya existe el id recibido para adicionar el mismo producto
            if(state.some((element)=> element.id === item.id)){

                //en caso afirmativo
                //obtenemos el index dentro del estado
                const indexProduct = state.findIndex(element => element.id === item.id)

                //otengo el producto y toda su info
                let product = state[indexProduct]

                //modifico la cantidad de ese producto
                product = {...product, quantity: product.quantity + quantity}

                const newCart = [...state]
                //Elimina un elemento (por eso se pone el 1) desde la posicion indexProduct y 
                //ahí se agrega el obejto producto
                newCart.splice(indexProduct, 1, product)
                state = [...newCart]

                console.log('Se aumento la cantidad del producto elegido');

            }else{
                let product = {
                    ...item,
                    quantity
                }
                state.push(product)
            }
        },
   },
})


// Action creators are generated for each case reducer function
export const { INCREMENT } = cartSlice.actions;

export default cartSlice.reducer