import React, {  useEffect, useState } from "react";
import { BiSort } from "react-icons/bi";
import { MdFilterAlt } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useGlobalContext } from "../../context/Context";
interface PersonInfo {
  _id: number| number;
  fname: string ;
  lname: string;
  phone: number | "";
  city?: string;
  woreda?: string;
  age: number ;
  gender: "male" | "female" | null | undefined | "";
  member: number;
}
export default function UserData() {
  const [data, setData] = useState<PersonInfo[] | null>();
  const [sortBy, setSortBy]=useState("")
  const {token}=useGlobalContext()
 const navigate=useNavigate()
  const handleSort=(ev:React.ChangeEvent<HTMLSelectElement>)=>{
    const {value}=ev.target
    setSortBy(value)
    console.log(sortBy)
  }
  const SortedData: PersonInfo[] | null |undefined = data?.sort((a, b) => {
    if (sortBy === "id") {
      return b._id - a._id; // Descending order for ID
    } else if (sortBy === "fname") {
      return b.fname.localeCompare(a.fname); // Case-insensitive sorting for name
    } else if (sortBy === "age") {
      return b.age - a.age; // Descending order for age
    } else {
      return 0; // No sorting for other values
    }
  });
  const fetchData = async () => {
    try {
      const response = await axios({
        method:"GET",
        url:"/api/users",
        headers:{
          Authorization:`Bearer ${token}`,
          "Content-Type":"application/json"
        }
      });
      const results = response.data;
      if (
        Array.isArray(results.data) &&
        results.data.every((item: any) => item)
      ) {
        setData(results.data);
      } else {
        console.error("Unexpected data format from API");
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const handleUpdate=(id:any)=>{
      navigate(`/demo/${id}`)
  }
  const handleDelete=async(id:number)=>{
    try {
      const response=await axios.delete(`/api/users/${id}`)
      console.log((response))
      if(response.status===204){
        alert(response.data.msg);
        fetchData();
      }
    } catch (error) {
      if(error instanceof Error){
        alert(`Error occur during delete ${error}`)
      }
    }
    fetchData()
  }
  const TdStyle = {
    ThStyle: `w-auto  border-l border-gray-500 py-4 px-3 text-lg font-medium  lg:py-7 lg:px-4 text-blue-500`,
    TdStyle: `w-auto border-b border-l border-gray-500  dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  }

  return (
    <div className=" overflow-x-auto scrollbar dark:bg-black dark:text-white">
      <div className=" w-[80%] mx-auto flex justify-between items-center ">
        <div><p>User Data</p> </div>
        <div className="flex items-center   gap-1 " >
          <button className="flex items-center gap-1 border-2 border-sky-400 rounded px-2 py-1"> < BiSort/>
          
           <select value={sortBy} onChange={handleSort}
           className="focus:outline-none bg-transparent"
           >
            <option value={""}>SortBy</option>
            <option value="id">Id </option>
            <option value="fname">first name</option>
          </select>
           </button>
          <button className="flex items-center gap-1 border-2 border-sky-400 rounded px-2 py-1"><MdFilterAlt/> Filter</button>
        </div>
      </div>
      <table className="w-full border-gray-500 border-2 mt-2">
          <thead className="text-center bg-primary border-2 border-gray-500">
            <tr>
              <th className={TdStyle.ThStyle}> First Name </th>
              <th className={TdStyle.ThStyle}> Last Name </th>
              <th className={TdStyle.ThStyle}> Age </th>
              <th className={TdStyle.ThStyle}> Phone  </th>
              <th className={TdStyle.ThStyle}> Gender </th>
              <th className={TdStyle.ThStyle}> Total Member </th>
              <th className={TdStyle.ThStyle}>Action</th>
            </tr>
          </thead>
      {SortedData &&
       SortedData.map((user) => {
          return (
            <tbody key={user._id}>
            <tr>
              <td className={TdStyle.TdStyle}>{user.fname}</td>
              <td className={TdStyle.TdStyle}>{user.lname}</td>
              <td className={TdStyle.TdStyle}>{user.age}</td>
              <td className={TdStyle.TdStyle}>{user.phone}</td>
              <td className={TdStyle.TdStyle}>{user.gender}</td>
              <td className={TdStyle.TdStyle}>{user.member}</td>
              <td className={TdStyle.TdStyle}>
                <button className="text-green-500 px-1" onClick={()=>handleUpdate(user._id)}>Edit</button>
                <button className="text-red-500 px-1" onClick={()=>handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
