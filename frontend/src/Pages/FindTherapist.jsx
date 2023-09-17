import React, { useState } from "react";
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
import {Link} from 'react-router-dom';

function FindTherapist() {
  const CardData = [
    {
      id: "1",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Online",
      category2: "Councellor",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "2",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Online",
      category2: "Councellor",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "3",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Offline",
      category2: "Councellor",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "4",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Offline",
      category2: "Councellor",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "5",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Online",
      category2: "Hypnotherapist",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "6",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Online",
      category2: "Hypnotherapist",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "7",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Offline",
      category2: "Hypnotherapist",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "8",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Offline",
      category2: "Hypnotherapist",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "9",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Online",
      category2: "Life Coach",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "10",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Online",
      category2: "Life Coach",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "11",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Offline",
      category2: "Life Coach",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
    {
      id: "12",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Offline",
      category2: "Life Coach",
      button1: "BOOK SESSION",
      button2: "VIEW PROFILE",
    },
  ];

  const [cardData, setCardData] = useState(CardData);
  const [originalCardData] = useState(CardData);

  const filterItem = (Cate) => {
    const UpdatedCate = originalCardData.filter((currCate) => {
      return currCate.category1 === Cate;
    });
    setCardData(UpdatedCate);
  };
  const filterCard = (Cate) => {
    const UpdatedCate = originalCardData.filter((currCate) => {
      return currCate.category2 === Cate;
    });
    setCardData(UpdatedCate);
  };
  const filterOnline = () => {
    const UpdatedCate = originalCardData.filter((currCate) => {
      return currCate.category1 === "Online";
    });
    setCardData(UpdatedCate);
  };

  const resetFilter = () => {
    setCardData(originalCardData);
  };

  return (
    <div>
      <NavBar />

      <section className="dummy-div">
        <h3
          style={{
            marginLeft: "300px",
            marginTop: "10px",
            position: "absolute",
            color: "black",
            fontWeight: "bolder",
          }}
        >
          FILTERS <LiaFilterSolid /> :
        </h3>
        <div className="functionality">
          <b>
            <span>
              <b>TYPE OF PROFESSIONAL :</b>
            </span>{" "}
          </b>

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
              <Button
                variant="outlined"
                sx={{ color: "black", backgroundColor: "white" }}
                onClick={() => filterCard("Councellor")}
              >
                COUNSELLOR
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "black", backgroundColor: "white" }}
                onClick={() => filterCard("Hypnotherapist")}
              >
                HYPNOTHERAPIST
              </Button>
              <Button
                variant="outlined"
                sx={{ color: "black", backgroundColor: "white" }}
                onClick={() => filterCard("Life Coach")}
              >
                LIFE COACH
              </Button>
            </ButtonGroup>
          </Box>

          <b>
            <span>
              <b>SESSION :</b>
            </span>{" "}
          </b>
          <Stack direction="row" spacing={1}>
            <Button
              variant="outlined"
              sx={{ color: "black", backgroundColor: "white" }}
              onClick={() => filterItem("Offline")}
            >
              OFFLINE
            </Button>

            <Button
              variant="outlined"
              sx={{ color: "black", backgroundColor: "white" }}
              onClick={filterOnline}
            >
              ONLINE
            </Button>
          </Stack>
          <Button
            variant="outlined"
            sx={{ color: "black", backgroundColor: "white" }}
            onClick={resetFilter}
          >
            RESET FILTER
          </Button>
        </div>

        <div className="selection">
          {cardData.map((item) => (
            <Card sx={{ maxWidth: 345 }} key={item.id}>
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
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  sx={{ color: "red" }}
                >
                  <b>{item.category1}</b>
                </Typography>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  sx={{ color: "red" }}
                >
                  <b>{item.category2}</b>
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.cardDesc}
                </Typography>
              </CardContent>
              <CardActions>

                <Button size="small" sx={{ fontWeight: "bolder" }}>
                  {item.button1}
                </Button>
                
                <Link to={`/profile/${item.id}`}>
                <Button size="small" sx={{ fontWeight: "bolder" }}>
                  {item.button2}
                </Button>
                </Link>
              </CardActions>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

export default FindTherapist;
