export const initialStore = () => {
  return {
    people: [],
    planets: [],
    vehicles: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'set_people':
      return { ...store, people: action.payload };

    case 'set_planets':
      return { ...store, planets: action.payload };

    case 'set_vehicles':
      return { ...store, vehicles: action.payload };

    case 'add_favorite':
      if (store.favorites.includes(action.payload)) return store;
      return { ...store, favorites: [...store.favorites, action.payload] };

    case 'remove_favorite':
      return { 
        ...store, 
        favorites: store.favorites.filter(fav => fav !== action.payload) 
      };

    default:
      throw Error('Unknown action.');
  }
}
