import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Inputs from "../components/Form/Inputs";
import RadioButton from "../components/Form/RadioButton";

import { useGlobalContext } from "../context/Context";


export type personInfo = {
  
  fname: string;
  lname: string;
  phone: number | "";
  city?: string;
  woreda?: string;
  age: number | "";
  gender: "male" | "female" | null | undefined | "";
  son?: number |"" ;
  daughter?: number |"";
  
};
export default function FormRegistration() {
  const [data, setData] = useState<personInfo>({
    fname: "",
    lname: "",
    phone: "",
    city: "",
    woreda: "",
    age: "",
    gender: "",
    son:"",
    daughter:""
  });
 const {language}=useGlobalContext()

  const labels :Record<typeof language, { [key: string]: string }>= {
    EN: {
      fname: "First Name",
      lname: "Last Name",
      phone: "Phone",
      city: "City",
      woreda: "Woreda",
      age: "Age",
      gender: "Gender",
      male:"male",
      female:"female",
      son: "Son",
      daughter: "Daughter",
      member:"Member"
    },
    AM: {
      fname: "ስም",
      lname: "የአባት ስም",
      phone: "ስልክ",
      city: "ከተማ",
      woreda: "ወረዳ",
      age: "እድሜ",
      gender: "ፆታ",
      male:"ወንድ",
      female:"ሴት",
      son: "ወንድ",
      daughter: "ሴት",
      member:"ቤተሰብ"
    },
    AO: {
      fname: "Maqaa ",
      lname: "Maqaa Abba",
      phone: "Bilbila",
      city: "Magaala",
      woreda: "Aanaa",
      age: "Umuri",
      gender: "Saala",
      male:"dhira",
      female:"dhala",
      son: "Dhira",
      daughter: "Durba",
      member:"Maatii"
    }
  };
const navigate=useNavigate()
  const handleOnChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    console.log( name, value)
    setData((prevData) => {
      return { ...prevData, [name]:  value };
    });
  };
  const handleSubmit = async (
    ev: React.FormEvent<EventTarget>
  ): Promise<void> => {
    ev.preventDefault();
    const response = await axios.post("/api/users/register", data);
    if(response.status===201){
         navigate("/dashboard")
    }
    console.log(data, "response", response);
  };
  return (
    <div className="bg-gray-500 bg-opacity-40 md:w-[50%]  mx-auto  px-3 py-2 text-center">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-2 w-auto">
        <h1 className="uppercase text-2xl py-2">Registration Form</h1>
        <Inputs
          labelName={labels[language].fname}
          type="text"
          name="fname"
          value={data.fname}
          onChange={handleOnChange}
          placeHolder="Enter first name"
        />
        <Inputs
          labelName={labels[language].lname}
          type="text"
          name="lname"
          value={data.lname}
          onChange={handleOnChange}
          placeHolder="Enter last name"
        />
        <Inputs
          labelName={labels[language].phone}
          type="number"
          name="phone"
          value={data.phone}
          onChange={handleOnChange}
          placeHolder="Enter your phone"
        />
        <Inputs
          labelName={labels[language].age}
          type="number"
          name="age"
          value={data.age}
          onChange={handleOnChange}
          placeHolder="Enter your Age"
        />
        <Inputs
          labelName={labels[language].city}
          type="text"
          name="city"
          value={data.city}
          onChange={handleOnChange}
          placeHolder="Enter your City"
        />

        <Inputs
          labelName={labels[language].woreda}
          type="text"
          name="woreda"
          value={data.woreda}
          onChange={handleOnChange}
          placeHolder="Enter your woreda"
        />
        <div className="flex items-center gap-2  justify-center w-full mt-3 ">
          <div className="flex items-center w-full   border-2 rounded-full  overflow-hidden">
            <div className="font-bold text-start bg-sky-600 px-2 py-3 text-white">
              <label>{labels[language].gender} </label>
            </div>

            <RadioButton
              type="radio"
              name="gender"
              value="male"
              checked={data.gender === "male"}
              onChange={handleOnChange}
              label={labels[language].male}
            />
            <RadioButton
              type="radio"
              name="gender"
              value="female"
              checked={data.gender === "female"}
              onChange={handleOnChange}
              label={labels[language].female}
            />
          </div>
        </div>
          <div className="flex items-center gap-2  justify-center w-full ">
            <div className="flex items-center  border-2  rounded-full my-2 gap-4 w-full overflow-hidden ">
              <div className="font-bold text-start py-6 pl-2 text-white h-full bg-sky-700">
                <label>{labels[language].member} </label>
              </div>
              <label>
              {labels[language].daughter}
                <input
                  type="number"
                  name="daughter"
                  value={data.daughter }
                  onChange={handleOnChange}
                  className="inline  
                  w-20 px-2 py-2 focus:ring-inset rounded-lg border-2
                  text-gray-900 ring-1 ring-inset ring-gray-300
                  focus:outline-none  "
                />
              </label>
              <label>
              {labels[language].son}
                <input
                  type="number"
                  name="son"
                  value={data.son}
                  onChange={handleOnChange}
                  className="inline  px-2 py-2
               w-20  focus:ring-inset rounded-lg border-2
              text-gray-900 ring-1 ring-inset ring-gray-300
              focus:outline-none  "
                />
              </label>

            </div>
          
        </div>
        <div>
          <button
            type="reset"
            className="px-5 mx-2 py-2 rounded-2xl bg-red-400 text-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 mx-2 py-2 rounded-2xl bg-sky-500 text-white"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
