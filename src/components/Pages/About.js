import React from "react";
import axios from "axios"
import { useEffect, useState} from "react";

export const About = () => {
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
    <div className="Main">
      <div className="m-3 d-flex">
      <div className="Container d-inline w-50">
      <div className="text-white m-5">
       <h1 className="title text-left">WITH HEYABAND YOU GET LOST IN THE MUSIC</h1>
       <p className="subtile text-left">Prepare yourself to listen to our music .We are a music bond that focused on pop and rock.</p>
       <button className="btn btn-lg bg-danger text-white h2 btn2">View Albums</button>
       </div>
       </div>
       <div className="d-inline">
       <div className="d-flex">
        <div className="d-inline">
         <img src={data[0]} alt=""></img>
         <img src={data[1]} alt=""></img>
         <img src={data[2]} alt=""></img>
         <img src={data[3]} alt=""></img>
         
        {/* <img className="img-fluid" src="https://images.pexels.com/photos/6270156/pexels-photo-6270156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/> */}
        {/* <img className="my-2" src="https://img.freepik.com/free-photo/male-musician-playing-guitar-stage-near-microphone-black-white_181624-2934.jpg?w=360" alt=""/> */}
        </div>
        
       </div> 
       </div>
       </div>
       
       <div>
       <div className="m-auto text-center">
        <h1>MEET OUR MEMBER</h1>
        <div className="">
        <p className="m-5">Sed ut perspiciatis unde omnis iste natus error sit valuptatem accusantium doloremque laudantium,totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
        </div>

        <div className="m-4 ">
           <div>   
                <img className="img-fluid img-thumbnail" src={data[1]} alt=""/>
                <img className="img-fluid img-thumbnail" src={data[2]} alt=""/>
                <img className="img-fluid img-thumbnail" src={data[3]} alt=""/>               

            </div>
            </div>
       </div>
       </div>

       <div>
       <div className="m-auto text-center">
        <h1>UPCOMING EVENT</h1>
        <div className="">
        <p className="m-5">Sed ut perspiciatis unde omnis iste natus error sit valuptatem accusantium doloremque laudantium,totam rem aperiam,eaque ipsa quae ab illo inventore veritatis et quasi architecto.</p>
        </div>

        <div className="m-4 ">
          <div className="d-flex">
           <div className="d-inline w-50">   
                <img className="img-fluid img-thumbnail" src={data[4]} alt=""/>
            </div>
            <div className="container bg-secondary d-inline m-5">
              <div>
              <span className="h4">ROCK'N ROLL FESTIVAL</span>
              <span className="mx-5">$9.99</span>
              </div>
              <div className="m-5">
                <span className="h6">Los Vegas,LA</span>
                <span className="mx-5">16/07/2021</span>
              </div>
              <button type="button" className="btn btn-light w-50">BUY TICKET NOW</button>
              
          </div>
          </div>  
            </div>


            <div className="m-4 ">
          <div className="d-flex">
           <div className="d-inline w-50">   
                <img className="img-fluid img-thumbnail" src={data[3]} alt=""/>
            </div>
            <div className="container bg-secondary d-inline m-5">
              <div>
              <span className="h4">ROCK'N ROLL FESTIVAL</span>
              <span className="mx-5">$9.99</span>
              </div>
              <div className="m-5">
                <span className="h6">Los Vegas,LA</span>
                <span className="mx-5">16/07/2021</span>
              </div>
              <button type="button" className="btn btn-light w-50">BUY TICKET NOW</button>
              
          </div>
          </div>  
            </div>

            <button type="button" className="btn btn-danger w-25 m-5">BUY TICKET NOW</button>




       </div>
       </div>


    </div>
  );
};
