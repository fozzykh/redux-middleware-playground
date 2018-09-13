export default ({ getState, dispatch }) => (next) => (action) => {
  console.log('🚀 ACTION FIRED', action);

  return next(action);
};

