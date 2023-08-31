import { useState,useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";
import useGif from "../hooks/useGif";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () =>{

  
  // const[gif,setGif]=useState('');
  // const[loading,setLoading]=useState(true);
   const[tag,setTag]=useState('car');

  // async function fetchdata(tag){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //   const {data}= await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   //console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect( () => {
  //   fetchdata('car');
  // },[])

  const{gif,loading,fetchdata}=useGif(tag)

  function clickHandler(){
    fetchdata('car');
  }

  function changeHandler(event){
    setTag(event.target.value);
  }


  return (
    <div  className="flex flex-col items-center  bg-blue-400 w-1/2 
     mx-auto rounded-lg border border-black gap-y-4 mb-10" >
      <h1 className="mt-4 uppercase underline text-2xl font-bold " >Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450" />)
      }
      <input type="text" className="w-10/12 bg-white py-2 rounded-xl text-xl mb-3 text-center"
      onChange={changeHandler}
      value={tag}></input>
      <button onClick={clickHandler}
      className=" w-10/12 bg-yellow-500 py-2 rounded-xl text-xl mb-5  ">Genereate</button>
    </div>
  )
}

export default Tag;