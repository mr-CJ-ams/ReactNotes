import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
  const {username} = useContext(AppContext);
  return (
      <div>
        <h1>
          Profile name: {username}
          <ChangeProfile/> 
        </h1>
      </div>
  );

}
