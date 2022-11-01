import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const CardDetails = (props) => {
  function onClickCancel() {
    props.setDisplay(true);
    console.log(props.property.image);
  }
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  return (
    <div>
      <AspectRatio minHeight="180px" maxHeight="300px" sx={{ my: 2 }}>
        <img src={props.image} alt="" />
      </AspectRatio>
      <Typography level="body1">Location name:</Typography>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {props.property.title}
      </Typography>
      <Typography level="body1" style={{ marginTop: "1rem" }}>
        Bedrooms:{props.property.bedrooms}
      </Typography>
      <Typography level="body1" style={{ marginTop: "1rem" }}>
        Cleaning Fee:{props.property["cleaning fee"]}
      </Typography>

      <Typography level="body1" style={{ marginTop: "1rem" }}>
        Price per night:{props.property.price_per_night}
      </Typography>
      <Typography level="body1" style={{ marginTop: "1rem" }}>
        City:{props.property.city}
      </Typography>

      <Typography level="body1" style={{ marginTop: "1rem" }}>
        Available:
      </Typography>
      <Typography level="body2">{props.property.date_range}</Typography>
      <Typography level="body1" style={{ marginTop: "1rem" }}>
        Description:
      </Typography>
      <Typography level="body2">{props.property.description}</Typography>

      <Button
        variant="solid"
        size="sm"
        color="primary"
        sx={{
          ml: "auto",
          fontWeight: 600,
          color: "blue",
          textDecoration: "underline",
          marginTop: "2rem",
        }}
        onClick={() => onClickCancel()}
      >
        Cancel
      </Button>
      <Button
        variant="solid"
        size="sm"
        color="primary"
        sx={{
          ml: "auto",
          fontWeight: 600,
          color: "blue",
          textDecoration: "underline",
        }}
        onClick={() => onClickCancel()}
      >
        Reserve
      </Button>
    </div>
  );
};

export default CardDetails;
