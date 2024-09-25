import  { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdTask } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { GoProject } from "react-icons/go";
import { CiSettings, CiLogout } from "react-icons/ci";
import { IoAdd } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

import Logo from "../UI/Logo";
import ThemeMode from "../UI/ThemeMode";
import { useGlobalContext } from "../../context/Context";
// const menuTranslations:any = {
//   EN: {
//     links: [
//       { label: "DashBoard", subItems: ["Submenu 1", "Submenu 2", "Submenu 3"] },
//       { label: "Task", subItems: ["User Data", "Create new user", "View user detail"] },
//       { label: "List Task" },
//       { label: "Statistics" },
//       { label: "Project" },
//     ],
//   },
//   AM: {
//     links: [
//       { label: "መቆጣጠሪያ ሰሌዳ", subItems: ["ንዑስ ምናሌ 1", "ንዑስ ምናሌ 2", "ንዑስ ምናሌ 3"] },
//       { label: "ተግባር", subItems: ["የተጠቃሚ መረጃ", "አዲስ ተጠቃሚ ፍጠር", "የተጠቃሚ ዝርዝር እይታ"] },
//       { label: "የተግባር ዝርዝር" },
//       { label: "ስታትስቲክስ" },
//       { label: "ፕሮጀክት" },
//     ],
//   },
//   AO: {
//     links: [
//       { label: "Gabate" },
//       { label: "Shaakala" },
//       { label: "Hojii Tarree" },
//       { label: "Statistiiksii" },
//       { label: "Proojektii" },
//     ],
//   },
// };
const links = [
  {
    id:1,
    icon: <MdDashboard />,
    label: "DashBoard",
    link: "dashboard",
    spacing: true,
    submenu: true,
    SubmenuItems: [
      { title: "Submenu 1", link:"home" },
      { title: "submenu 2" ,link:"home" },
      { title: "submenu 3", link:"home"  },
    ],
  },
  {
    id:2,
    icon: <MdTask />,
    label: "Task",
    link: "task",
    submenu: true,
    SubmenuItems: [
      { title: "User Data", link:"userdata" },
      { title: "Create new user" , link:"/demo"},
      { title: "view user detail", link:"" },
    ],
  },
  {
    id:3,
    icon: <MdTask />,
    label: "List Task",
    link: "task",
  },
  {
    id:4,
    icon: <FcStatistics />,
    label: "Statistics",
    link: "statistic",
  },
  {
    id:5,
    icon: <GoProject />,
    label: "Project",
    link: "project",
  },
  {
    id:5,
    icon: <GoProject />,
    label: "Home",
    link: "/home",
  },
];
const secondLinks = [
  {
    icon: <CiSettings />,
    label: "Setting",
    link: "setting",
  },
  {
    icon: <IoAdd />,
    label: "Add Task",
    link: "",
  },
  {
    icon: <CiLogout />,
    label: "Logout",
    link: "",
  },
];
export default function Sideboard() {
  const [multipleSelect, setMultipleSelect]=useState<number[]>([])
 const {openIcon, query, setShow}=useGlobalContext()


  const handleClick = (id:number) => {
    let cypSelectElement:number[]=[...multipleSelect]

    const findIndexOfELEment=cypSelectElement.indexOf(id)

    if(findIndexOfELEment===-1){
      cypSelectElement.push(id)
    }else{
      cypSelectElement.splice(findIndexOfELEment, 1)
    }
    setMultipleSelect(cypSelectElement)
    
  };
  return (
    <div className="h-full  mt-2 rounded-e-lg relative">
      
      <div className="h-full flex flex-col justify-center gap-5 pl-2 py-5 ">
        <div className="absolute top-2 flex items-start ">
          <Logo  />   
        </div>
        <ul>
          {links.filter((menu)=>menu.label.toLowerCase().includes(query)).map((link, index) => (
            <div key={index + link.id}>
              <li key={index + link.id}>
                <Link
                  onClick={()=>setShow(false)}
                  to={`${link.link === "dashboard" ? "/dashboard" : link.link}`}
                  className={`py-1  ${openIcon ? "text-lg" : "text-3xl"}  hover:bg-slate-70
               hover:text-white rounded-xl my-2 pl-2 pr-1 flex items-center gap-1`}
                >
                   <span className={`${openIcon ? " text-lg" : "text-2xl"}`}>{link.icon}</span>
                  {openIcon && link.label}
                  {link?.submenu && openIcon && (
                  <span onClick={()=>handleClick(link.id)}>
                      { multipleSelect.indexOf(link.id)!==-1 ? 
                      <IoIosArrowDown/> : 
                       <IoIosArrowForward/>
                       }
                  </span> 
                  )}

                </Link>
              </li>
              {link.SubmenuItems && multipleSelect.includes(link.id) && (
                <ul className=" mx-auto ml-8">
                  {link.SubmenuItems.map((submenu) => (
                    <li>
                      <Link to={submenu?.title} >{submenu.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </ul>
        <div>
          {secondLinks.filter((menu)=>menu.label.toLowerCase().includes(query)).map((link) => (
            <Link
            key={link.label}
              to={`${link.link}`}
              className="py-1  text-lg  hover:bg-slate-700
               hover:text-white rounded-xl my-2 pl-2 pr-1 flex items-center gap-1"
            >
              {link.icon} {openIcon && link.label}
            </Link>
          ))}
        </div>
        <div
          className={`flex items-start absolute bottom-4 ${
            openIcon ? "" : "-left-3"
          }`}
        >
          <ThemeMode />
        </div>
      </div>
    </div>
  );
}
