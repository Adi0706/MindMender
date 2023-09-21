import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import FindTherapist from '../Pages/FindTherapist';
import About from '../Pages/About';
import Profile from '../Pages/Profile';
import gilly from "../Media/gillyrussel.png";
const therapists = [
    {
      id: "1",
      image: gilly,
      cardname: "GILLY RUSSELL",
      cardDesc:
        "I am a qualified psychodynamic counsellor offering long and short term therapy. I recommend coming for an initial consultation so you can speak more about what may be troubling you. My practice is in Gillingham (Dorset).",
      category1: "Online",
      category2: "Councellor",
      button1: "BOOK SESSION",
      phone:"+91 9337689810",
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
      
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
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
      about: "I work with clients to help them to understand their feelings and emotions, reduce the control that these have over our lives, and take action to make life more fulfilling. " + 
      "I see myself as a warm, supportive counsellor, but that doesn't mean I'll avoid asking difficult questions. Sometimes change requires looking at things we've been avoiding for years and this can be challenging - my job is to help you through that in a safe, private environment. " +
      "I'm trained as an Integrated Relational counsellor, so draw from different theories, but mainly use Person Centred and Acceptance and Commitment Therapy. Contact me for a free 20 min chat to see If I'm right for you. I usually reply to enquiries within 48 hours - please check spam folders if you haven't received a reply in that time.",
      certification:"Post Graduate Diploma in Counselling and Psychotherapy. MBACP.",
      subjects:"Anger management" +
      "Anxiety ," +
     " Depression ," +
     " Feeling sad ," +
     " Generalised anxiety disorder (GAD) ," +
     " Low self-confidence ," +
     " Low self-esteem , "+
     " Mental health ," +
     " Panic attacks ,",
    },
];

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/findyourtherapist"
          element={<FindTherapist therapists={therapists} />}
        />
        <Route path="/About" element={<About />} />
        <Route
          path="/profile/:id"
          element={<Profile therapists={therapists} />}
        />
      </Routes>
    </div>
  );
}

export default AllRoutes;
