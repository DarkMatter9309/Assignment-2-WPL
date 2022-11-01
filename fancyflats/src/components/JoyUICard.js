import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";
import useStore from "./../store";
// import iamges from "./../assets/001.jpg";

export default function JoyUICard(props) {
  function onClickCard() {
    props.setDisplay(false);
    props.setProperty(props.property);
  }

  return (
    <Card variant="outlined" sx={{ width: 320, margin: "1rem" }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {/* Yosemite National Park */}
        {props.title}
      </Typography>
      <Typography level="body2">
        {/* April 24 to May 02, 2021 */}
        {props.date_range}
      </Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        <BookmarkAdd />
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={props.image} alt="" />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography fontSize="md" fontWeight="md">
            {props.city}
          </Typography>
          <Typography level="body1">Price per night:</Typography>
          <Typography fontSize="md" fontWeight="md">
            {props.price}
          </Typography>
        </div>

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
          onClick={() => onClickCard()}
        >
          Details
        </Button>
      </Box>
    </Card>
  );
}
