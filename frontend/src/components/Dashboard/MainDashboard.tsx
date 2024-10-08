
import Card from "./Card";
import UserData from "../UI/UserData";

export default function MainDashboard() {
  return (
    <div className="pt-3 px-3 overflow-hidden h-auto  ">
      <div className="w-[90%]  mx-auto flex h-auto flex-col sm:flex-row gap-3 ">
        <div className="sm:w-[30%] w-full h-80 bg-slate-500 rounded-lg py-2 my-2">
          <Card />
        </div>
        <div className="sm:w-[40%] w-full h-80 bg-slate-500 rounded-lg py-2 my-2">
          <Card />
        </div>
        <div className="sm:w-[30%] w-full h-80 bg-slate-500 rounded-lg py-2 my-2">
          <Card />
        </div>
      </div>
      <div>
        <UserData />
      </div>
    </div>
  );
}
