import axios from 'axios';


export function registerForBusinessUser(values, history){
  console.log('register action creater', values);
  return function(dispatch){
      history.push('/talents');
  }
}

export function signinBusinessUser(values){

}

