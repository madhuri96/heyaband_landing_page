import React from "react";

export const Album = () => {
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
                <img className="img-fluid img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96txMgVaUpoqaRQmtb9jC500Av4CiLnjdul-WyD4juDnwy0yzsWW02jWnnnzxHt7UTak&usqp=CAU" alt=""/>
               </span>

               <span className=""> 
                <img className="img-fluid img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96txMgVaUpoqaRQmtb9jC500Av4CiLnjdul-WyD4juDnwy0yzsWW02jWnnnzxHt7UTak&usqp=CAU" alt=""/>
                
               </span>

               <span className=""> 
                <img className="img-fluid img-thumbnail" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96txMgVaUpoqaRQmtb9jC500Av4CiLnjdul-WyD4juDnwy0yzsWW02jWnnnzxHt7UTak&usqp=CAU" alt=""/>
                
               </span>
            </div>
            </div>
       </div>
       </div>

  );
};