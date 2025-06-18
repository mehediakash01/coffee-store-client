import { ArrowLeft } from "lucide-react";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const navigate = useNavigate();
  const Coffees = useLoaderData();
  console.log(Coffees);
  const {
    _id,
    name,
    barista,
    price,
    photo,
    Supplier,
    taste,
    category,
    details,
  } = Coffees;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UpdatedData = Object.fromEntries(formData.entries());
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your coffee has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/')
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto ">
      <button
        onClick={() => navigate("/")}
        className="flex items-center mt-10 text-[#374151] hover:bg-[#D2B48C] hover:p-2  hover:rounded-2xl w-fit transition-all ease-in-out duration-150"
      >
        {" "}
        <ArrowLeft></ArrowLeft> Back to home
      </button>
      <div className="bg-[#F4F3F0] p-24 my-16">
        <div className="text-center my-5">
          <h1 className="text-4xl text-[#331A15]">Update Coffee</h1>
          <p className="text-[#1B1A1A]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdate}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-around gap-3">
            <fieldset className="">
              <label className="mb-2">Name</label>
              <br />
              <input
                type="text"
                className="input w-full"
                name="name"
                defaultValue={name}
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
                defaultValue={barista}
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
                defaultValue={Supplier}
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
                defaultValue={taste}
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
                defaultValue={price}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
                placeholder="Photo url"
              />
            </fieldset>
          </div>

          <input
            className="btn bg-[#D2B48C] text-[#331A15] w-full my-3"
            type="submit"
            value="Update Coffee"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
