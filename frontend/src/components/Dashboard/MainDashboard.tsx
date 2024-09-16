
import Card from "./Card";
import UserData from "../UI/UserData";

export default function MainDashboard() {
  return (
    <div className="pt-3 px-3 overflow-hidden h-full">
      <div className="w-[90%]  mx-auto flex h-[40%] gap-3 ">
        <div className="w-[30%] bg-slate-500 rounded-lg py-2 my-2">
          <Card />
        </div>
        <div className="w-[40%] bg-slate-500 rounded-lg py-2 my-2">
          <Card />
        </div>
        <div className="w-[30%] bg-slate-500 rounded-lg py-2 my-2">
          <Card />
        </div>
      </div>
      <div>
        <UserData />
      </div>
    </div>
  );
}
