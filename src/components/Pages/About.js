import React from "react";

export const About = () => {
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
       <div className="d-inline w-50">
       <div className="d-flex">
        <div className="d-block">
        <img className="img-fluid" src="https://images.pexels.com/photos/6270156/pexels-photo-6270156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <img className="my-2" src="https://img.freepik.com/free-photo/male-musician-playing-guitar-stage-near-microphone-black-white_181624-2934.jpg?w=360" alt=""/>
        </div>
        <div className="d-inline mx-2">
        <img src="data:image/jpeg;base64,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" alt=""/>
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
                <img className="img-fluid img-thumbnail" src="https://d10j3mvrs1suex.cloudfront.net/u/509629/78ee34f8baec767475934efa42e4802a65dcde6b/original/kennyaronoffa.jpg/!!/b%3AW1siZXh0cmFjdCIseyJsZWZ0IjoxMjgsInRvcCI6MjksIndpZHRoIjozMDIsImhlaWdodCI6MzAyfV0sWyJyZXNpemUiLDMzMF0sWyJtYXgiXSxbIndlIl1d/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg" alt=""/>
                <img className="img-fluid img-thumbnail" src="https://i1.sndcdn.com/artworks-000026325347-1oza3d-t500x500.jpg" alt=""/>
                <img className="img-fluid img-thumbnail" src="https://qph.cf2.quoracdn.net/main-thumb-124726948-200-avjdffwyxpabeejosvtjijjjazezesze.jpeg" alt=""/>               

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
                <img className="img-fluid img-thumbnail" src="https://d10j3mvrs1suex.cloudfront.net/u/509629/78ee34f8baec767475934efa42e4802a65dcde6b/original/kennyaronoffa.jpg/!!/b%3AW1siZXh0cmFjdCIseyJsZWZ0IjoxMjgsInRvcCI6MjksIndpZHRoIjozMDIsImhlaWdodCI6MzAyfV0sWyJyZXNpemUiLDMzMF0sWyJtYXgiXSxbIndlIl1d/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg" alt=""/>
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
                <img className="img-fluid img-thumbnail" src="https://d10j3mvrs1suex.cloudfront.net/u/509629/78ee34f8baec767475934efa42e4802a65dcde6b/original/kennyaronoffa.jpg/!!/b%3AW1siZXh0cmFjdCIseyJsZWZ0IjoxMjgsInRvcCI6MjksIndpZHRoIjozMDIsImhlaWdodCI6MzAyfV0sWyJyZXNpemUiLDMzMF0sWyJtYXgiXSxbIndlIl1d/meta%3AeyJzcmNCdWNrZXQiOiJiemdsZmlsZXMifQ%3D%3D.jpg" alt=""/>
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
