import React, { useState, useEffect } from "react";
import JoyUICard from "./JoyUICard";
import useStore from "../store";
import CardDetails from "./CardDetails";

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

  const [display, setDisplay] = useState(true);
  const [property, setProperty] = useState({});

  return (
    <div>
      {display == true && (
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
              property={property}
              title={property.title}
              date_range={property.date_range}
              price={property.price_per_night}
              city={property.city}
              available={property.available}
              image={property.image + ".jpg"}
              setDisplay={setDisplay}
              setProperty={setProperty}
            />
          ))}
        </div>
      )}
      {display == false && (
        <CardDetails
          property={property}
          setDisplay={setDisplay}
          image={property.image + ".jpg"}
        />
      )}
    </div>
  );
};

export default LoactionCards;
