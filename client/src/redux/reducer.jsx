/* eslint-disable no-case-declarations */
import { GET_COUNTRIES, GET_DETAIL, POST_ACTIVITY, FILTER, ORDER, SEARCH, ERROR } from "./actiontypes";

const initialState = {
  countries: [],
  filteredCountries: [],
  searchedCountries: [],
  detail: {},
  activity: [],
  error: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return { ...state, countries: payload, error: '' };

    case GET_DETAIL:
      return { ...state, detail: payload, error: '' };

    case POST_ACTIVITY:
      return { ...state, activity: payload, error: '' };

    case SEARCH:
      // var allCountriesToSearch = [];
      // if (state.filteredCountries.length > 0) {
      //   allCountriesToSearch = state.filteredCountries        
      // } else {
      //   allCountriesToSearch = state.countries
      // }

      const searchedCountries = state.countries.filter((country) => {
        return country.name.toLowerCase().startsWith(payload.toLowerCase());        
      })
      return {
        ...state,
        searchedCountries: payload === '' ? state.countries : searchedCountries,
        filteredCountries: [],
      }

    case FILTER:
      var allCountriesToFilter = [];
      if (!state.filteredCountries.filter((country) => country.continent === payload)) {
        allCountriesToFilter = state.filteredCountries        
      } else if (state.searchedCountries.length > 0) {
        allCountriesToFilter = state.searchedCountries
      } else {
        allCountriesToFilter = state.countries
      }

      const continentFiltered = allCountriesToFilter.filter(country => country.continent === payload);
      return {
        ...state,
        filteredCountries: payload === 'All' ? allCountriesToFilter : continentFiltered,
      }

    case ORDER:
      var orderArray = [];
      if (state.filteredCountries.length > 0) {
        orderArray = [...state.filteredCountries]
      } /*else if (state.searchedCountries.length > 0) {
        orderArray = state.searchedCountries
      }*/ else {
        orderArray = [...state.countries]
      }

      const sortedArray = orderArray.sort((a, b) => {
        if (payload === 'Ascendent') {
          return a.name.localeCompare(b.name);
        } else if (payload === 'Descendent') {
          return b.name.localeCompare(a.name);
        } else if (payload === 'AscendentByPopulation') {
          return b.population - a.population;
        } else if (payload === 'DescendentByPopulation') {
          return a.population - b.population;
        }
      })

      return {
        ...state,
        filteredCountries: sortedArray,
      }

    case 'CLEAN_ALL':
      return {
        ...state,
        filteredCountries: [],
        searchedCountries: [],
      }

    case ERROR:
      return {
        ...state,
        error: payload
      }

    default:
      return state;
  }
}