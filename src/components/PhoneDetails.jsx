import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SpinnerInfinity } from "spinners-react";

function PhoneDetails() {
  const navigate = useNavigate();
  const { phoneId } = useParams();
  const [phone, setPhone] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, [phoneId]);

  const getData = async () => {
    setIsFetching(true);
    try {
      const response = await axios.get(
        `http://localhost:5005/phones/${phoneId}`
      );
      console.log("fetching data");
      setPhone(response.data);
      setIsFetching(false);
    } catch (error) {
      navigate("/error");
    }
  };

  if (isFetching) {
    return <SpinnerInfinity />;
  }

  return (
    <div className="details">
      <img src={`./images/${phone.imageFileName}`} alt="phone" />
      <h2>{phone.name}</h2>
      <p>Manufacturer: {phone.manufacturer}</p>
      <p>Description: {phone.description}</p>
      <p>Color: {phone.color}</p>
      <p>Price: {phone.price}€</p>
      <p>Screen: {phone.screen}</p>
      <p>Processor: {phone.processor}</p>
      <p>RAM: {phone.ram}</p>
    </div>
  );
}

export default PhoneDetails;
