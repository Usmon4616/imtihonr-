
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Right() {
  const [customers, setCustomers] = useState([]);
  const [ Masiv, setMasiv] = useState([])

  useEffect(() => {
    axios
      .get("https://myjson.dit.upm.es/api/bins/8cfv")
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
  function Fun(index){
    // console.log(customers[index]);
    setMasiv([...Masiv,customers[index]])
    console.log(Masiv);
  }
  return (
    <>
     <div className="row">
       {
           customers.map((element, index) => {
               return(
                   <div className="col-3">
                      <div className="">
                        <img className="rasm1" src={element.img_src}  />
                        <h4>{element.cost}$</h4>
                        <h4>{element.name}</h4>
                        <AccountCircleIcon className="iconcam"/>
                        {/* <Link to='/Sale1'> */}
                          {/* <Button onClick={Fun}/> */}
                          <button className="btn btn-success" onClick={()=>Fun(index)}>Qo`shish</button>
                        {/* </Link> */}
                        
                        

                      </div>
                   </div> 
               );

           })
       }
      </div>
    </>
  );
}