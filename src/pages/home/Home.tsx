import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary min-h-screen text-white ">
      <div className=" text-lg font-bold pl-10 pt-5 "> Datacense </div>
      <div className="flex items-center pt-10 flex-col gap-5">
        <div className="text-3xl">Welcome To Datacenses</div>
        <div className="">
          If you have account Please{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>
        <div className="">
          Want to register?
          {""} <span className=" underline cursor-pointer"  onClick={() => navigate("/register")} >Register Here</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
