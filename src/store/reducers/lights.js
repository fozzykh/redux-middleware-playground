export default (state = null, action) => {

  const initState = {
    bedroom: 'off',
    kitchen: 'off',
    livingRoom: 'off'
  };

  switch(action.type) {
    case 'turn_on':
      return {...state, [action.roomType]: 'on'};
    case 'turn_off':
    return {...state, [action.roomType]: 'off'};
    default:
      return initState;
  }
}