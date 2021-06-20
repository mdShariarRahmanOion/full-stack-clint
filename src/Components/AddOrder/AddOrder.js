import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddOrder = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] =useState(null);

    const onSubmit = data => {
        const eventData ={
          name: data.name,
            imageURL: imageURL
        };
       
        const url = `https://desolate-tor-51962.herokuapp.com/addOrder`;
        console.log(eventData)
        fetch(url,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
    
    };


    const handleImageUpload = event =>{
     console.log(event.target.files[0]);  
     const imageData = new FormData();
    imageData.set('key', '2679d68bfcedfe60c64dc17a8fa463b4');
    imageData.append('image', event.target.files[0]);   
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    return (
        <div>
            {/* <h1>Add Your Food Order Here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input name ="name"defaultValue="test" {...register("name")} />
      <br />
    <input name="exampleRequired" type="file" onChange={handleImageUpload} ></input>

    <br /> <input type="submit" />
    </form> */}

        </div>
    );
};

export default AddOrder;