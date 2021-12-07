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
      console.log(state);
      return {
        ...state,
        data: [
          ...state.data.map((product) => {
            if (product.id === action.payload.id) {
              product = {
                ...action.payload,
              };
              console.log(product);
            }
            return product;
          }),
        ],
      };
    }

    default:
      return state;
  }
};

export default mainData;
