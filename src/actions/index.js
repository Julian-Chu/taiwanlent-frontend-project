export const FILTERS = 'FILTERS';


export const setFilters = (filters) =>{
  return {
    type: FILTERS,
    payload: filters
  }
}