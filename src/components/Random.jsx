import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



const Random = () => {

// const [gif,setGif]=useState('');
// const [loading,setLoading]=useState(true);
//  async function fetchdata()
//  {
//    setLoading(true);
//    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
//    const {data}=await axios.get(url);
//    const imageSource= data.data.images.downsized_large.url;
//    setGif(imageSource)
//    setLoading(false);
//} 


   const{gif,loading,fetchdata}=useGif();
 function clickHandler () {
  fetchdata();
 }
  
//  useEffect( () => {
//   fetchdata();
// },[] )


  return (<div>
    <div className="flex flex-col items-center  bg-green-400 w-1/2 
    mx-auto rounded-lg border border-black gap-y-4  ">
      <h1 className="mt-4 uppercase underline text-2xl font-bold  ">a random gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }

      <button onClick={clickHandler} className=" w-10/12 bg-yellow-500 py-2 rounded-xl text-xl mb-7 "
      >Genereate</button>
    </div>
  </div>);
}
export default Random;
