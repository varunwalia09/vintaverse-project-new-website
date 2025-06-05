'use client'
import VantaBackground from "./VantaBackground";
import Description from "./Description";
import Intro from "./Intro";
import Marquee from "./Marquee";
import Card from "./Card";
import Section from "./Section";
export default function Home() {
  return (
   <section>
      <div className="video-container"></div>
     <VantaBackground/>
        <Description/>
        <Intro/>
        <Marquee/>
      <div className="our-specialization">
        <h1>Our Specialization</h1>
      </div>
      <div
        style={{
          // minHeight: "250vh",
          paddingTop: "100px",
          display: "flex",
          justifyContent: "center",
          gap: "5px",
          // flexWrap: "wrap",
          background: "#0F1C93",
          margin:" 10rem auto",
          maxWidth:"93.75vw",
          borderRadius:"20px",
        }}
      >
        
        <Card
          frontText="UI/UX Designer"
          description="Creative design with a user-first approach."
          skills={[
            "Figma",
            "Sketch",
            "User Research",
            "illustrator",
            "PhotoShop",
          ]}
        />
        
        <Card
          frontText="Front-End Developer"
          description="Interactive UIs using modern frameworks."
          skills={["React", "GSAP", "Tailwind CSS", "MUI"]}
        />
        <Card
          frontText="Backend Developer"
          description="Secure and scalable backend systems."
          skills={["Node.js", "MongoDB", "Express", "Php", "My Sql"]}
        />
       
      </div>
       <Section/>
    </section>
  );
};