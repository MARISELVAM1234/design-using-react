import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./in.css";
import Caro from "../assets/caro.png";

export const MI = () => {
    const options = {
        loop : true ,
        margin:10,
        items:1,
        responsive :{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        }
    };

    return (
      <div>
        <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
           
          </div>
        </div>
        <div className="container-fluid ">
        
          <OwlCarousel
          {...options}
            
            className="owl-theme set"
            loop
            nav
          >
            <div>
              <img className="img" alt="" src={Caro} />
            </div>
            <div>
              <img className="img" alt="" src={Caro} />
            </div>
            <div>
              <img className="img" alt="" src={Caro} />
            </div>
            <div>
              <img className="img" alt="" src={Caro} />
            </div>
            <div>
              <img className="img" alt="" src={Caro} />
            </div>
            <div>
              <img className="img" alt="" src={Caro} />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
}

export default MI;

/* .set {
  padding-left: 24px;
  padding-right: 24px;
} */
/* @media(min-width:1200px){
  .set {
    padding-left: 156px;
    padding-right: 156px;
  }
} */
/* .owl-theme .owl-dots .owl-dot {
display: none;
} */



/* .owl-theme .owl-nav [class*='owl-']{
  width: 40px;
    height: 40px;
    font-size: 24px;
    background-color:#FFFFFF;
} */
/* .owl-theme .owl-nav [class*='owl-']:hover{
    background-color: white;
    color: black;
} */
 {/* carousel part */}
 <div>
 {/* <div class="container-fluid">
   <div className="row title" style={{ marginBottom: "20px" }}>
    
   </div>
 </div> */}
 {/* <div className="container-fluid ">
   <OwlCarousel {...options} className="owl-theme set" loop nav>
    
       {carouselContent.map((ele, index) => (
         <div key={index} className="card">
           <img className="img" alt="" src={ele.image} />
           <div className="caro-card-cont">
             <h4>{ele.subTittle}</h4>
             <p>
               {ele.Para}
             </p>
             <p>{ele.contact}</p>
           </div>
         </div>
       ))} */}

       {/* <img className="img" alt="" src={Car} />
       <div className="caro-card-cont">
         <h4>Indore</h4>
         <p>
           12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,
           Indore MP - 452011
         </p>
         <p>+91 90399 44417</p>
       </div>
     </div>
     <div className="card">
       <img className="img" alt="" src={Ca} />
       <div className="caro-card-cont">
         <h4>Indore</h4>
         <p>
           12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,
           Indore MP - 452011
         </p>
         <p>+91 90399 44417</p>
       </div>
     </div>
     <div className="card">
       <img className="img" alt="" src={Cao} />
       <div className="caro-card-cont">
         <h4>Indore</h4>
         <p>
           12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,
           Indore MP - 452011
         </p>
         <p>+91 90399 44417</p>
       </div>
     </div>
     <div className="card">
       <img className="img" alt="" src={Car} />
       <div className="caro-card-cont">
         <h4>Indore</h4>
         <p>
           12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,
           Indore MP - 452011
         </p>
         <p>+91 90399 44417</p>
       </div>
     </div>
     <div className="card">
       <img className="img" alt="" src={Cao} />
       <div className="caro-card-cont">
         <h4>Indore</h4>
         <p>
           12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,
           Indore MP - 452011
         </p>
         <p>+91 90399 44417</p>
       </div>
     </div>
     <div className="card">
       <img className="img" alt="" src={Caro} />
       <div className="caro-card-cont">
         <h4>Indore</h4>
         <p>
           12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,
           Indore MP - 452011
         </p>
         <p>+91 90399 44417</p>
       </div>