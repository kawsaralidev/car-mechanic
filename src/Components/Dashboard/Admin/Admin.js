import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Admin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdmin = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setEmail("");
          alert("admin make successfull");
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleAdmin}>
        <TextField sx={{ width: "50%" }} label="Email" type="email" onChange={handleOnBlur} variant="standard" />
        <Button className="service-btn" type="submit">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default Admin;
