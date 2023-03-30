import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SpinnerInfinity } from "spinners-react";

function PhoneList() {
  const navigate = useNavigate();
  const [phones, setPhones] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:5005/phones");
      setPhones(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching) {
    return <SpinnerInfinity />;
  }

  return (
    <div className="list">
      {phones.map((phone) => {
        return (
          <p key={phone.name}>
            <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
          </p>
        );
      })}
    </div>
  );
}

export default PhoneList;
