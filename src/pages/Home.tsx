import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate("/apply")}>
      신청하기
    </button>
  );
}

export default Home;