import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => navigate("/")}
          className="flex items-center mt-10 text-[#374151] hover:bg-[#D2B48C] hover:p-2  hover:rounded-2xl w-fit transition-all ease-in-out duration-150"
        >
          {" "}
          <ArrowLeft></ArrowLeft> Back to home
        </button>
        <img src="/images/404/404.gif" alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
