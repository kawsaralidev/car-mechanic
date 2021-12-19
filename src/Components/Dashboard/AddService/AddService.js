import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://arcane-beach-62066.herokuapp.com/services", data)

      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };
  return (
    <div className="add-service">
      <h2 className="text-info m-5"> Add Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" /> <br />
        <textarea {...register("discription")} placeholder="discription" /> <br />
        <input type="number" {...register("price")} placeholder="price" /> <br />
        <input {...register("img")} placeholder="image" /> <br />
        <input className="service-btn rounded" type="submit" />
      </form>
    </div>
  );
};

export default AddService;
