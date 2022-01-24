const initData = {
  data: [],
};

export const dataReducer = (state = initData, action) => {
  if (action.type === 'SET_DATA') {
    return {
      ...state,
      data: action.value,
    };
  }

  return state;
};
