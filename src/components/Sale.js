
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from './Button'
import { Link } from 'react-router-dom'
import BackspaceIcon from '@mui/icons-material/Backspace';
import MenuBookIcon from '@mui/icons-material/MenuBook';
export default function Right() {
  const [customers, setCustomers] = useState([]);
  const [Masiv, setMasiv] = useState([])
  const [Masivcha, setMasivcha] = useState([])

  useEffect(() => {
    axios
      .get("https://api.npoint.io/17004af1e46256632540")
      .then((response) => {
        const data = response.data.Search;
        setCustomers(data);
        console.log(response.data)
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(customers);
  }, [customers]);
  function Fun(index) {
    // console.log(customers[index]);
    setMasiv([...Masiv, customers[index]])
    console.log(Masiv);
  }
  function Funi(index) {
    // console.log(customers[index]);
    setMasivcha([customers[index]])
    console.log(Masivcha);
  }


  return (
    <>
      <div className="row">
        <div className="col-4">
          <div className="container">
            <div className="gap">
              <h3>Bookmarks</h3>
              <h4>If you don’t like to read, you haven’t found the right book</h4>
            </div>
            {
              Masiv.map((element) => {
                return (
                  <>
                    <div className="qalesan">
                      <h5>{element.Title}</h5>
                      <h6>{element.Year}</h6>
                      <h6>like to read, you haven’t found the right book</h6>
                      <div className="ochir">
                        <BackspaceIcon />
                        <div className="ikkinchi">
                          <MenuBookIcon />
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
        <div className="col-8">
          <div className="row">
            {
              customers.map((element, index) => {
                return (
                  
                      <div className="col-4">
                    <div className="card">
                      <img className="rasm1" src={element.Poster} />
                      <h5>{element.Title}</h5>
                      <h6>{element.Year}</h6>
                      <h6>2022-04-08</h6>
                      <AccountCircleIcon className="iconcam" />
                      {/* <Link to='/Sale1'>
                          <Button/>
                        </Link> */}
                      <div className="knopkala">
                        <button className="btn btn-warning m-2" onClick={() => Fun(index)}>Qo`shish</button><br /><br />
                        {/* <!-- Button trigger modal --> */}

                        <button type="button" onClick={() => Funi(index)} class="btn m-2 text-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          MORE INFO
                        </button>
                        

                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div className="zooorlekin">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="staticBackdropLabel">MALUMOT</h5>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                  {
                                    Masivcha.map((element) => {
                                      return (
                                        <>
                                          <div className="qalesan">
                                            <img src={element.Poster} alt="" />
                                            <h5>{element.Title}</h5>
                                            <h6>{element.Year}</h6>
                                            <h6>like to read, you haven’t found the right book</h6>
                                            {/* <div className="ochir">
                                              <BackspaceIcon />
                                              <div className="ikkinchi">
                                                <MenuBookIcon />
                                              </div>
                                            </div> */}
                                            
                                          </div>
                                        </>
                                      )
                                    })
                                  }
                                  Completely revised and updated, this best-selling introduction to programming in JavaScript focuses on writing real applications.

                                  JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.

                                  This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track.

                                  As with previous editions, Haverbeke continues to teach through extensive examples and immerses you in code from the start, while exercises and full-chapter projects give you hands-on experience with writing your own programs. You start by learning the basic structure of the JavaScript language as well as control structures, functions, and data structures to help you write basic programs. Then you'll learn about error handling and bug fixing, modularity, and asynchronous programming before moving on to web browsers and how JavaScript is used to program them. As you build projects such as an artificial life simulation, a simple programming language, and a paint program, you'll learn how to:

                                  - Understand the essential elements of programming, including syntax, control, and data
                                  - Organize and clarify your code with object-oriented and functional programming techniques
                                  - Script the browser and make basic web applications
                                  - Use the DOM effectively to interact with browsers
                                  - Harness Node.js to build servers and utilities

                                  Isn't it time you became fluent in the language of the Web?

                                  * All source code is available online in an inter¬active sandbox, where you can edit the code, run it, and see its output instantly.





                                  Author :


                                  Published :

                                  Publishers:

                                  Categories:
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                  <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );

              })
            }
          </div>
        </div>
        <div>
          {
            Masiv.map((element) => {
              return (
                <>
                  <div className="qalesan1">


                  </div>
                </>
              )
            })
          }
        </div>

      </div>
    </>
  );
}
