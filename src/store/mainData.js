const initialState = { data: [] };
const mainData = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    }
    case "UPDATE_DATA": {
       return state.data.map(product => {
           console.log(product, action.payload.id)
        if (product.id === action.payload.id) {
          return {...action.payload}
        };
        return product;
    })
}
    
        
    
    default:
      return state;
  }
};

export default mainData;
