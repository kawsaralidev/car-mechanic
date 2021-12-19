import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyBook = (props) => {
  const [users, setUsers] = useState([]);
  const { userName, email, phone, _id } = props.order;
  console.log(users);
  const handleDelete = (id) => {
    console.log(id);
    const proced = window.confirm("Are you sure? you want to delete");
    if (proced) {
      const url = `https://arcane-beach-62066.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete successfully");
            const remainingUser = users.filter((user) => user._id !== id);
            console.log(remainingUser);
            setUsers(remainingUser);
          }
        });
    }
  };
  return (
    <>
      <div className=" ">
        <div className="row ">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5>{userName}</h5>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5> {email} </h5>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h5>$ {phone} </h5>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <Button as={Link} to="/success" className="btn-success">
              Payment
            </Button>
            <Button onClick={() => handleDelete(_id)} className="btn-danger">
              Deleted
            </Button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default MyBook;
