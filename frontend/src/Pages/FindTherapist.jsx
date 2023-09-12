import React from "react";
import NavBar from "../Components/NavBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { LiaFilterSolid } from "react-icons/lia";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import gilly from "../Media/gillyrussel.png";

function FindTherapist() {
  const CardData = [
    {
    id:"1" , 
    image:gilly,
    cardname:"GILLY RUSSELL",
    cardDesc:"I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
    button1:"BOOK SESSION",
    button2:"VIEW PROFILE"
    },
    {
      id:"1" , 
      image:gilly,
      cardname:"GILLY RUSSELL",
      cardDesc:"I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      button1:"BOOK SESSION",
      button2:"VIEW PROFILE"
      },
      {
        id:"1" , 
        image:gilly,
        cardname:"GILLY RUSSELL",
        cardDesc:"I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
        button1:"BOOK SESSION",
        button2:"VIEW PROFILE"
        },
        {
          id:"1" , 
          image:gilly,
          cardname:"GILLY RUSSELL",
          cardDesc:"I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
          button1:"BOOK SESSION",
          button2:"VIEW PROFILE"
          },
          
  ]
  
  return (
    <div>
      <NavBar />

      <section className="dummy-div">
        <h3
          style={{
            marginLeft: "300px",
            marginTop: "10px",
            position: "absolute",
            color:"black",
            fontWeight:"bolder"            
          }}
        >
          FILTERS <LiaFilterSolid /> :
        </h3>
        <div className="functionality">
        <b><span><b>TYPE OF PROFESSIONAL :</b></span> </b>
       
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup variant="text" aria-label="text button group">
              <Button variant="outlined" sx={{ color: "black",backgroundColor:"white" }}>
                COUNCELLOR{" "}
              </Button>
              <Button variant="outlined" sx={{ color: "black",backgroundColor:"white" }}>
                HYPNOTHERAPIST
              </Button>
              <Button variant="outlined" sx={{ color: "black",backgroundColor:"white" }}>
                LIFE COACH
              </Button>
            </ButtonGroup>
          </Box>

          <b><span><b>SESSION :</b></span> </b>
          <Stack direction="row" spacing={1}>
          <Button variant="outlined" sx={{ color: "black",backgroundColor:"white" }}>
              OFFLINE
            </Button>

            <Button variant="outlined" sx={{ color: "black",backgroundColor:"white" }}>
              ONLNE
            </Button>
          </Stack>
        </div>

        <div className="selection">

          {/*Mapping the cards*/}
          {CardData.map((item) => (

          
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              style={{ margin: "auto" }}
              image={item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.cardname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {item.cardDesc}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"sx={{fontWeight:"bolder"}}>{item.button1}</Button>
              <Button size="small"sx={{fontWeight:"bolder"}}>{item.button2}</Button>
            </CardActions>
          </Card>

         ))}
        </div>
      </section>
    </div>
  );
}

export default FindTherapist;
