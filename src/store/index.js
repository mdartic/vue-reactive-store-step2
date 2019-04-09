import axios from "axios";

export const store = {
  state: {
    /**
     * Tell if this store is in a loading state or not
     * @type {boolean}
     */
    loading: false,
    /**
     * Represent an error during the last data fetching
     * @type {Error}
     */
    error: null,
    /**
     * The data stored, could be an array, object, what you need to store
     * @type {Object}
     */
    data: null
  },
  computed: {
    myComputedState() {
      if (store.state.loading) return "Loading state...";
      if (store.state.error) return "Error during last fetch";
      if (store.state.data) return "Data loaded !";
      return "No data... please fetch data first";
    }
  }
};

/**
 * Fetch the data and store it
 */
export async function fetchData() {
  store.state.loading = true;
  store.state.error = null;
  try {
    const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    store.state.data = pokemons.data;
  } catch (error) {
    store.state.error = error;
  }
  store.state.loading = false;
}
