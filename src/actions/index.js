export const FILTERS = 'FILTERS';


export const setFilter = (filters) =>{
  return {
    type: FILTERS,
    payload: filters
  }
}