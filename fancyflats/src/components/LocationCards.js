import React, { useEffect } from "react";
import JoyUICard from "./JoyUICard";
import useStore from "../store";
const LoactionCards = () => {
  const setProperties = useStore((state) => state.setProperties);
  const setFilteredProperties = useStore(
    (state) => state.setFilteredProperties
  );
  const filteredProperties = useStore((state) => state.filteredProperties);

  useEffect(() => {
    fetch("properties.json")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data.properties);
        setFilteredProperties(data.properties);
      })
      .catch(console.log);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "2rem",
      }}
    >
      {filteredProperties.map((property, index) => (
        <JoyUICard
          key={index}
          title={property.title}
          date_range={property.date_range}
          price={property.price_per_night}
          city={property.city}
          available={property.available}
          image={"./../assets/" + property.image + ".jpg"}
        />
      ))}
    </div>
  );
};

export default LoactionCards;
