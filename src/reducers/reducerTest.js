const initialState = {
  testReducerInitState: 'initState',
};

function reducerTest(state = initialState, action) {
  switch (action.type) {
    // case ACTION_TEST:
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
}

export default reducerTest;
