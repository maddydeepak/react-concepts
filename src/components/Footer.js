import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Footer = () => {
  const { user, setUser } = useContext(UserContext);
  UserContext.name = "Maddy";
  console.log(name);
  return <span className="m-2 p-2">Site Developed By: {user.name}</span>;
};

export default Footer;
