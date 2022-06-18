import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Right() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("https://myjson.dit.upm.es/api/bins/bbm7")
      .then((response) => {
        const data = response.data;
        setCustomers(data);
        console.log(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(customers);
  }, [customers]);
  
  return (
    <>
     <div className="divcha">
       {
           customers.map((element) => {
               return(
                   <div className="sapn">
                      <div>
                        <img className="rasm" src={element.img_src}  />
                      </div>
                   </div> 
               );

           })
       }
      </div>
    </>
  );
}