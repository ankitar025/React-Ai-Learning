export const initialState = {
    messages: [],
    loading: false,
  };
  
  export function ChatReducer(state, action) {
    switch (action.type) {
      case "USER_MESSAGE":
        return {
          ...state,
          messages: [...state.messages, action.payload],
          loading: true,
        };
  
      case "AI_MESSAGE":
        return {
          ...state,
          messages: [...state.messages, action.payload],
          loading: false,
        };
  
      default:
        return state;
    }
  }
  