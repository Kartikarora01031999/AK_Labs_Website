import React from "react";
import {useState,useEffect} from "react";

import Navbar from "../components/Navbar";
import { createBucket,getallBucket,addtoCard,getallCards,deletecard } from "../functions/Handler";

const Home = () => {
  const [bucket,setBucket]=useState("");
  const [selectbucket,setSelectBucket]=useState("");
  const [artist,setArtist]=useState("");
  const [url, setUrl]=useState("");
  const[data, setData]=useState({})
  const[cards,setCards]=useState([])
  useEffect(() => {
    getallBucket().then((res)=>{
      setData(res.data)
    })
    getallCards().then((res)=>{
      setCards(res.data)
    })
  },[bucket])

  const DeleteCard= async(e,id)=>{
    try{
      deletecard(id).then((res)=>{
      console.log(res.data)
      alert("Card Deleted Successfully")
      window.location.reload()})
      
    }
    catch(error){
      console.log(error)
      setArtist("")
      setUrl("")
      setSelectBucket("")
    }
  }
  const handleCard= async(e)=>{
    try{
      console.log(bucket)
      addtoCard(selectbucket,artist,url).then((res)=>
      console.log(res.data))
      alert("Card Added Successfully")
    }
    catch(error){
      console.log(error)
      setArtist("")
      setUrl("")
      setSelectBucket("")
    }
  }
  const handleSubmit= async(e)=>{
    try{
      console.log(bucket)
      createBucket(bucket).then((res)=>
      console.log(res.data))
      alert("Category Added Successfully")
    }
    catch(error){
      console.log(error)
      
    }
  }

    return (
        <>
        <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
    
          <a href="index.html" class="logo d-flex align-items-center">
            <h1>Logis</h1>
          </a>
          <Navbar />
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          
    
        </div>
      </header>
        <section id="hero" class="hero d-flex align-items-center">
        <div class="container">
          <div class="row gy-4 d-flex justify-content-between" data-aos="fade-up">
            <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up">Create Category</h2>
              <form class="d-flex align-items-stretch mb-3" onSubmit={handleSubmit}>
              <input type="text" class="form-control"  id="exampleFormControlInput1" placeholder="Enter  Name" value={bucket} onChange={e=> setBucket(e.target.value)}/>
                <button type="submit" class="btn btn-primary">Add Bucket</button>
              </form>
    
            </div>
          </div>
          <div class="row gy-4 d-flex justify-content-between" data-aos="fade-up">
            <div class="">
              
              {data.length>0 && <form class="" onSubmit={handleCard}>
              <h2 data-aos="fade-up" class="text-dark">Create Card</h2>
                  <input type="text" class="form-control" placeholder="Enter Artist Name" value={artist} onChange={e=> setArtist(e.target.value)}/>
                  <input type="url" class="form-control" placeholder="Enter Url" value={url} onChange={e=> setUrl(e.target.value)}/>
                  <select value={selectbucket} onChange={e=> setSelectBucket(e.target.value)} class="form-control" >
                  <option value="">Choose a Category</option> 
                    {data.map((data,i) => 
                    <option value={data["bucket_name"]}>{data["bucket_name"]}</option>)}
                    </select>
                <button type="submit" class="btn btn-primary">Add Cardt</button>
              </form>
              }

            </div>
          </div>
        </div>
      </section>
      <main id="main">
      <div class="container">
      <table class="table">
              <thead>
    <tr>
      <th scope="col">Artist</th>
      <th scope="col">Url</th>
      <th scope="col">Category</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
      {cards.map((data,i) => 
           
                      <tbody>
    <tr>
      <th scope="row">{data["artist"]}</th>
      <td><a href={data["url"]} target="_blank">{data["url"]}</a></td>
      <td>{data["bucket_name"]}</td>
      <td><button class="btn btn-danger" onClick={(e)=> {DeleteCard(e, data["id"])}}>Delete</button></td>
    </tr>
  </tbody>
            
)}
</table>
</div>
    </main>
      </>
    );
        
  };
  
  export default Home;
  