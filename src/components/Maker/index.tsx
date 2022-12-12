import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

interface Props {
  authService: any;
}

export default function Maker(props: Props) {
  const { authService } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService //
      .onAuthChange((user: any) => {
        console.log("user", user);
        if (user === null) {
          navigate("/card-maker");
        }
      });
  }, []);

  return (
    <div>
      <Header onLogout={handleLogout} />

      <h1>wqewqewqewq</h1>
    </div>
  );
}
