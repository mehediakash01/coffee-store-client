import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";

import { useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";


const SocialLogin = () => {
  const { continueWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleGoogle = () => {
    continueWithGoogle()
      .then((result) => {
        console.log(result);
        
        navigate(state || "/" , {replace:true});
      })
      .catch((error) => {
              console.log(error.message);

      });
  };

  return (
    <div>
     <div className="flex w-full flex-col">
  
  

</div>

      <button onClick={handleGoogle} className="btn btn-info w-full">
        {" "}
        <FcGoogle /> Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
