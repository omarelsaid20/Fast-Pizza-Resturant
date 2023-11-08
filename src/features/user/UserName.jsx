import { useSelector } from "react-redux";

function UserName() {
  const userName = useSelector((state) => state.user.userName);
  console.log(userName);

  if (!userName) return null;
  return (
    <div className="text-s hidden font-semibold text-stone-200 md:block">
      {userName}
    </div>
  );
}

export default UserName;
