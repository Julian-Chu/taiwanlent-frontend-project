import axios from 'axios';

export const GET_Talents = "GET_Talents";
export default function getTalents(){
  return dispatch =>{
    axios.get('http://localhost:4000/users')
        .then(res=>{
          console.log("Talents:", res.data);
          const talents = res.data.map(person=>{
            
            return person;
          });
          dispatch(getTalentsAsync(talents));
        });
  }
}

function getTalentsAsync(talents){
  return{
    type: GET_Talents,
    payload:talents
  };
}