import { baseUrl } from '../shared/baseUrl.js';

export async function fetchPizza(){
  try {
    const response = await fetch(baseUrl);
    let data = await response.json();
    return data;
  }
  catch (error) {
    console.error('There was an error!', error);
  }
}
