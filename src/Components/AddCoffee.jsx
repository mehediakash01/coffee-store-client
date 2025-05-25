import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const navigate = useNavigate();
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addNewData = Object.fromEntries(formData.entries());
    console.log(addNewData);
    fetch("http://localhost:3000/coffees", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addNewData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your coffee has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log("data after post", data);
      });
  };

  return (
    <div className="w-11/12 mx-auto ">
        <button onClick={()=>navigate('/')} className="flex items-center mt-10 text-[#374151] hover:bg-[#D2B48C] hover:p-2  hover:rounded-2xl w-fit transition-all ease-in-out duration-150"> <ArrowLeft></ArrowLeft> Back to home</button>
      <div className="bg-[#F4F3F0] p-24 my-16">
        <div className="text-center my-5">
          <h1 className="text-4xl text-[#331A15]">Add New Coffee</h1>
          <p className="text-[#1B1A1A]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around gap-3">
            <fieldset className="">
              <label className="mb-2">Name</label>
              <br />
              <input
                type="text"
                className="input w-full"
                name="name"
                placeholder="Coffee name"
              />
            </fieldset>
            <fieldset className="">
              <label className="mb-2">barista</label>
              <br />
              <input
                type="text"
                className="input w-full"
                name="barista"
                placeholder="barista name"
              />
            </fieldset>
            <fieldset className="">
              <label className="mb-2">Supplier</label>
              <br />
              <input
                type="text"
                className="input w-full"
                name="Supplier"
                placeholder="Supplier name"
              />
            </fieldset>
            <fieldset className="">
              <label className="mb-2">taste</label>
              <br />
              <input
                type="text"
                className="input w-full"
                name="taste"
                placeholder="coffee taste"
              />
            </fieldset>
            <fieldset className="">
              <label className="mb-2">price</label>
              <br />
              <input
                type="text"
                className="input w-full"
                name="price"
                placeholder="price"
              />
            </fieldset>
            <fieldset className="">
              <label className="mb-2">category</label>
              <br />
              <input
                type="text"
                className="input w-full"
                name="category"
                placeholder="category"
              />
            </fieldset>
            <fieldset className="">
              <label className="mb-2">details</label>
              <br />
              <input
                type="text"
                className="input w-full"
                name="details"
                placeholder="details"
              />
            </fieldset>
            <fieldset className="">
              <label className="mb-2">Photo</label>
              <br />
              <input
                type="text"
                className="input w-full"
                name="photo"
                placeholder="Photo url"
              />
            </fieldset>
          </div>

          <input
            className="btn bg-[#D2B48C] text-[#331A15] w-full my-3"
            type="submit"
            value="add Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
