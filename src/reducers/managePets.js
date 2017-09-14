export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case 'ADD_PET':
        return {pets: state.pets.concat(action.pet)}
      break;
    case 'REMOVE_PET':
        return {pets: state.pets.filter(p => action.id !== p.id)}
      break;
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const container = document.getElementById('container')
  container.innerHTML = state.pets.map(pet => `<ul><li>${pet.name}</li></ul>`)
}
