export default function reducer(state, action) {
  switch (action.type) {
    case "addToCart": {
      return {
        data: action.data,
      };
    }
    default:
      return state;
  }
}
