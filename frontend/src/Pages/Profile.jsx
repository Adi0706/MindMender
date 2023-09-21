import React from 'react';
import { useParams } from "react-router-dom";
import NavBar from '../Components/NavBar';
import { Button } from '@mui/material';

function Profile({ therapists }) {
    const { id } = useParams();
    console.log("ID from URL:", id);

    const therapist = therapists.find((t) => t.id === id);
    console.log("Therapist:", therapist);

    if (!therapist) {
        return <h1>Therapist Not Found...</h1>;
    }

    return (
        <>
            <NavBar />
            <section className="profile">
            <img src={therapist.image} alt={therapist.cardname} />
            <div className="profile-content">
                <h2>{therapist.cardname}  ({therapist.category1} {therapist.category2})</h2>
                <h3>MBACP. PG Dip.</h3>
                <Button size="large" sx={{ fontWeight: "bolder" }}>
                  BOOK SESSION
                </Button>
                <p>{therapist.phone}</p>
            </div>
            </section>
            <div className="aboutme" style={{width:"700px",height:"auto",marginTop:"20px",marginLeft:"400px",padding:"20px",boxShadow:"0px 0px 5px black"}}>
                <h2 style={{textAlign:"center"}}>ABOUT ME </h2>
                <p>{therapist.about}</p>
            </div>
            <div className="aboutme" style={{width:"700px",height:"auto",marginTop:"20px",marginLeft:"400px",padding:"20px",boxShadow:"0px 0px 5px black"}}>
                <h2 style={{textAlign:"center"}}>TRAINING QUALIFICATIONS AND CERTIFICATIONS </h2>
                <p style={{textAlign:"center",padding:"5px"}}>{therapist.certification}</p>
            </div>
            <div className="aboutme" style={{width:"700px",height:"auto",marginTop:"20px",marginLeft:"400px",padding:"20px",boxShadow:"0px 0px 5px black"}}>
                <h2 style={{textAlign:"center"}}>AREAS OF COUNCELLING I DEAL WITH :</h2>
                <p style={{textAlign:"center",padding:"5px"}}>{therapist.subjects}</p>
            </div>
            
        </>
    );
}

export default Profile;
