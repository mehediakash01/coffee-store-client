import axios from "axios";
import React from "react";
import { BiSolidShow } from "react-icons/bi";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";



const CardDetails = ({ setCoffeeData,coffee}) => {
  const {_id, name, barista, price, photo } = coffee;


  const handleDelete = (id)=>{

Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
     axios.delete(`http://localhost:5000/coffees/${id}`)
     setCoffeeData((prev)=>prev.filter(coff=>coff._id!==id));
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});



   

  }

  return (
    <div className=" bg-[#F5F4F1] w-11/12 mx-auto flex justify-around rounded-2xl items-center  p-5  my-8">
      <div>
        <img src={photo} className="w-52 h-56" alt="" />
      </div>
      <div>
        <h1 className="font-semibold">
          Name: <span className="opacity-50">{name} </span>
        </h1>
        <h1 className="font-semibold">
      
          Barista: <span className="opacity-50">{barista} </span>
        </h1>
        <h1 className="font-semibold">
          
          Price: <span className="opacity-50">{price} taka</span>
        </h1>
      </div>
      <div className="space-y-2">
        <Link to={`/coffeeDetails/${_id}`}>
            <button  className="bg-[#E3B577] p-2 rounded-2xl">
              <span className="text-white">
                <BiSolidShow />
              </span>
            </button>
        </Link>
        <Link to={`/update/${_id}`}>
            <button  className="bg-black p-2 rounded-2xl">
              <span className="text-white">
                <MdEdit />
              </span>
            </button>
        </Link>
        <button
        onClick={()=>handleDelete(_id)}
         
          className="bg-red-500 p-2 rounded-2xl"
        >
          <span className="text-white">
            <MdDelete />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
