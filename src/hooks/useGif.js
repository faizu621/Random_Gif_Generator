import { useState,useEffect } from "react";
//import Spinner from "./Spinner";
import axios from "axios";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const useGif = (tag) =>{


    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  
  const[gif,setGif]=useState('');
  const[loading,setLoading]=useState(true);
  //const[tag,setTag]=useState('car');

  async function fetchdata(tag){
    setLoading(true);
    const {data}= await axios.get(tag ? tagMemeUrl : randomMemeUrl);
    const imageSource=data.data.images.downsized_large.url;
    //console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }

  useEffect( () => {
    fetchdata('car');
  },[])

  return {gif,loading,fetchdata};

}

export default useGif;