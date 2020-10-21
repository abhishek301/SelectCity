const initialState = {
  citiesList : [
    { 
        country: "Portugal",
        city: ['Aasiya Jayavant', 'Luvleen Lawrence', 'Rey Mibourne', 'cayla Brister'],
    },
    { 
        country: "Nicaragua",
        city: ['Deveedaas Nandi', 'Obsey Chidy', 'Xenie Dolezelova', 'Ezequiel Dengra'],
    },
    { 
      country: "Marsall islands",
      city: ['Aaron Almaraz', 'Jelena Denisova',],
  },
  ],

  selectedCities :  [],

}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'ADD':
        return {...state, selectedCities: action.payload}
      case 'DELETE':
        return {...state, selectedCities: action.payload};
      default:
        return state
    }
  }
