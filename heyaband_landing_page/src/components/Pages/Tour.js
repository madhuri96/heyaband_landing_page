import React from "react";
import "./tour.css"
import axios from "axios"
import { useEffect, useState} from "react";

export const Tour = () => {

   const [data,setData] = useState([]);
   useEffect(()=>{
    axios.get('http://localhost:8000/api/pic').then(res=>{
       console.log(res.data)
       setData(res.data.data)
    })
    .catch(err =>{
      console.log('error...')
    })
   },[])

  return (
    <div>
       <div className="m-auto text-center">
        <h1>OUR TOURS</h1>
        <div className="m-5 d-flex">
        <p className="w-75 text-left d-inline">Sed ut perspiciatis unde omnis iste natus error sit valuptatem accusantium doloremque laudantium,totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
        <button type="button" className="btn btn-light mx-5 d-inline">VIEW TOURS</button>
        </div>

        <div className="m-4 ">
           <div>  
                <span className="tour"> 
                <img className="img-fluid img-thumbnail" src={data[0]} alt=""/>
                <span className="second-txt h1">
                   USA TOUR
               </span>
               </span>

               <span className="tour"> 
                <img className="img-fluid img-thumbnail" src={data[1]} alt=""/>
                <span className="second-txt h1">
                   UK TOUR
               </span>
               </span>

               <span className="tour"> 
                <img className="img-fluid img-thumbnail" src={data[2]} alt=""/>
                <span className="second-txt h1">
                   INDIA TOUR
               </span>
               </span>
            </div>
            </div>
       </div>
       </div>

  );
};
