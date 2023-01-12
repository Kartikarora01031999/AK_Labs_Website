import React from "react";
import axios from "axios";

export const createBucket= async(bucket)=>{
    console.log("Api hit", bucket)
    return await axios.post('https://3001-kartikarora-aklabswebsi-i3obcpqvx6x.ws-us82.gitpod.io/posts',{
        "bucket_name":bucket
    },{
        headers:{
        },
    });



};
export const getallBucket= async()=>{
    return await axios.get('https://3001-kartikarora-aklabswebsi-i3obcpqvx6x.ws-us82.gitpod.io/posts',{
    },{
        headers:{
        },
    });

};

export const addtoCard = async(bucket,artist,url)=>{
    
    return await axios.post('https://3001-kartikarora-aklabswebsi-i3obcpqvx6x.ws-us82.gitpod.io/card/',{
        "bucket_name":bucket,
        "artist":artist,
        "url":url    
    },{
        headers:{
        },
    });

};

export const getallCards= async()=>{
    return await axios.get('https://3001-kartikarora-aklabswebsi-i3obcpqvx6x.ws-us82.gitpod.io/card/',{
    },{
        headers:{
        },
    });

};

export const deletecard= async(id)=>{
    return await axios.delete('https://3001-kartikarora-aklabswebsi-i3obcpqvx6x.ws-us82.gitpod.io/card/'+id,{
    },{
        headers:{
        },
    });

};

