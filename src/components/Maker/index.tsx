import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
      <h1>wqewqewqewq</h1>
    </div>
  );
}
