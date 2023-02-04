import React from "react";
import "./tour.css"

export const Tour = () => {
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
                <img className="img-fluid img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96txMgVaUpoqaRQmtb9jC500Av4CiLnjdul-WyD4juDnwy0yzsWW02jWnnnzxHt7UTak&usqp=CAU" alt=""/>
                <span className="second-txt h1">
                   USA TOUR
               </span>
               </span>

               <span className="tour"> 
                <img className="img-fluid img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96txMgVaUpoqaRQmtb9jC500Av4CiLnjdul-WyD4juDnwy0yzsWW02jWnnnzxHt7UTak&usqp=CAU" alt=""/>
                <span className="second-txt h1">
                   UK TOUR
               </span>
               </span>

               <span className="tour"> 
                <img className="img-fluid img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96txMgVaUpoqaRQmtb9jC500Av4CiLnjdul-WyD4juDnwy0yzsWW02jWnnnzxHt7UTak&usqp=CAU" alt=""/>
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
