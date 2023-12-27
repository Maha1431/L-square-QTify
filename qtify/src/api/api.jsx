import axios from "axios";

export const Endpoint = "https://qtify-backend-labs.crio.do/";


export const fetchTopAlbums = async() => 
{
    try{
  const request = await axios.get(`${Endpoint}/albums/top`);
  return request.data
    }
    catch(e)
    {
        console.log(e);
    }
}

export const fetchNewAlbums = async() => 
{
    try{
  const request = await axios.get(`${Endpoint}/albums/new`);
  return request.data
    }
    catch(e)
    {
        console.log(e);
    }
}

export const fetchSongs = async() => 
{
   try{
  const request = await axios.get(`${Endpoint}/songs`);
  return request.data
    }
    catch(e)
    {
        console.log(e);
    }
}

export const fetchFilters = async() => 
{
   try{
  const request = await axios.get(`${Endpoint}/genres`);
  return request.data
    }
    catch(e)
    {
        console.log(e);
    }
}