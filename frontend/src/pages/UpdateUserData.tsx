import axios from "axios";
import React, { useEffect, useState } from "react";
import { redirect, useParams, useNavigate } from "react-router-dom";
import { personInfo } from "./FormRegistration";
import Inputs from "../components/Form/Inputs";
import RadioButton from "../components/Form/RadioButton";
const defaultValue={
  fname: "",
  lname: "",
  phone: "",
  city: "",
  woreda: "",
  age: "",
  gender: "",
 member: "",
}
export default function UpdateUserData() {
  const [userData, setUserData] = useState(defaultValue);

  const { id } = useParams();
 const navigate=useNavigate()

  const fetchData = async () => {
    const response = await axios.get(`/api/user/${id}`);
    console.log("response", userData);
    try {
      if (response) {
        const [users] = response.data.results;
        setUserData(users);
      } else {
        alert("Error happen check it");
      }
    } catch (error) {
      console.error("Error is ", error);
    }
  };
  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setUserData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleUpdate=(ev:React.ChangeEvent<HTMLFormElement>)=>{
    ev.preventDefault()
    try {
      axios.put("/api/user/update", userData)
      .then((data:unknown)=>{
       alert("Update success full ")
       setUserData(defaultValue)
       navigate("/dashboard")
      }).catch((error:unknown)=>{
        alert("error is happen ")
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(`Error Alert: ${error.message}`);
      } else {
        alert("An unknown error occurred.");
      }
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
 console.log("user Data",userData)
  return (
    <div>
    
        {userData ? (
      <form onSubmit={handleUpdate}
      className="text-center bg-slate-100 w-[50%] mx-auto py-2">
        <h1> Update user Data </h1>
          <div>
            <Inputs
              labelName="First Name"
              type="text"
              name="fname"
              value={userData?.fname}
              onChange={handleOnChange}
            />
            <Inputs
              labelName="First Last"
              type="text"
              name="lname"
              value={userData?.lname}
              onChange={handleOnChange}
            />
            <Inputs
              labelName="Phone"
              type="number"
              name="phone"
              value={userData?.phone}
              onChange={handleOnChange}
            />
             <Inputs
              labelName="Age"
              type="number"
              name="age"
              value={userData?.age}
              onChange={handleOnChange}
            />
            <Inputs
              labelName="City"
              type="text"
              name="city"
              value={userData?.city}
              onChange={handleOnChange}
            />
            <Inputs
              labelName="Woreda"
              type="text"
              name="woreda"
              value={userData?.woreda}
              onChange={handleOnChange}
            />
             <Inputs
              labelName="Member"
              type="text"
              name="member"
              value={userData?.member}
              onChange={handleOnChange}
            />
            <div className="flex items-center gap-2  justify-center w-full ">
          <div className="flex items-center   border-2 rounded-full w-80 overflow-hidden">
            <div className="font-bold text-start bg-sky-600 px-2 py-3 text-white">
              <label>Gender </label>
            </div>

            <RadioButton
              type="radio"
              name="gender"
              value="male"
              checked={userData.gender === "male"}
              onChange={handleOnChange}
              label="Male"
            />
            <RadioButton
              type="radio"
              name="gender"
              value="female"
              checked={userData.gender === "female"}
              onChange={handleOnChange}
              label="Female"
            />
          </div>
          </div>
          </div>
       <button>Update</button>
      </form>
       ) : (
        <p>Not Fetch Data</p>
      )}
    </div>
  );
}
