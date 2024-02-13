import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IoIosSearch } from "react-icons/io";
import { FaUserAstronaut } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  searchingMovies,
} from "../Redux/Action/moviesAction";
const Header = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getKeyWord = (keyword) => {
    setKeyword(keyword);
    navigate("/searching")
  };

  useEffect(() => {
    dispatch(searchingMovies(keyword));
   
  }, [dispatch, keyword,navigate]);

  return (
    <div className="header bg-red-500 p-3 flex items-center relative ">
      <input
        type="text"
        className="w-full py-2 pl-8 pr-4   rounded-md focus:outline-none focus:border-blue-500 bg-red-500 placeholder:text-white"
        placeholder="Search Movies ........."
        onChange={(e) => getKeyWord(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <IoIosSearch className="text-white" />
      </div>
      <p className="text-white">Himanshu</p>
      <div className="avatar rounded-full border border-black right-6  p-2 absolute  top-11 ">
        <FaUserAstronaut />
      </div>
    </div>
  );
};

export default Header;
