import React from "react";
import axios from "axios"
import { useEffect, useState} from "react";

export const Album = () => {

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
    <div className="m-5">
       <div className="m-auto text-center">
        <h1>MUSIC ALBUMS</h1>
        <div className="m-5 d-flex">
        <p className="w-75 text-left d-inline">Sed ut perspiciatis unde omnis iste natus error sit valuptatem accusantium doloremque laudantium,totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
        <button type="button" className="btn btn-light mx-5 d-inline">VIEW ALL ALBUMS</button>
        </div>

        <div className="m-4 ">
           <div>  
                <span className=""> 
                <img className="img-fluid img-thumbnail" src={data[1]} alt=""/>
               </span>

               <span className=""> 
                <img className="img-fluid img-thumbnail" src={data[3]} alt=""/>
                
               </span>

               <span className=""> 
                <img className="img-fluid img-thumbnail" src={data[2]} alt=""/>
                
               </span>
            </div>
            </div>
       </div>


       <div className="m-auto text-center">
        <h1 className="m-5">Letest News</h1>

        <div className="m-4 ">
           <div>  
                <span className=""> 
                <img className="img-fluid img-thumbnail" src={data[1]} alt=""/>
               </span>

               <span className=""> 
                <img className="img-fluid img-thumbnail" src={data[3]} alt=""/>
                
               </span>

               <span className=""> 
                <img className="img-fluid img-thumbnail" src={data[2]} alt=""/>
                
               </span>
            </div>
            </div>
       </div>

       <div className="m-auto text-center">
        <h1>SIGNUP FOR THE LETEST NEWSLETTER</h1>
        <div className="m-5 d-flex">
        <p className="w-75 d-inline text-muted">Subscribe for free downloads and news updates</p>

        </div>


        <div className=" ">
           <div>  
                
            </div>
            </div>
       </div>
       </div>

  );
};