import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function exp() {
  const contentBar = {
    backgroundColor: "#f8f8ff",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  };

  return (
    <div>
      <Navbar key="exp" link="exp" />

      <div class="m-5 mt-0 py-4" style={contentBar}>
        <div
          style={{ alignContent: "center" }}
          class="mx-4 my-4 vstack d-flex justify-content-center"
        >
          <div class="m-3">
            <h1 style={{ textAlign: "center" }}>Experience</h1>
            <hr />
          </div>

          {/* cards */}
          <Card
            isLeftCard={true}
            imgSrc="./drakeCom.gif"
            title="Technical troubleshooting"
            content="The first thing that got me into computer, I was able to fixed basic problem on my computer with internet researching since then I become tech support to my family."
          />

          <Card
            isLeftCard={false}
            imgSrc="./gui.png"
            title="GUI development"
            content="I start to developed GUI application by using Python at the time I was in highschool. Most of the application are scientific calculator and at the time I was graduated from highschool I created about 10 application. Truth be told, it wasn't very efficient but I think it was a good start of programming."
          />

          <Card
            isLeftCard={true}
            imgSrc="./cramersrule.jpg"
            title="Linear Equation Solver"
            content="I was developing Linear Equation Solver around my freshman year and it was based on Cramer's rule. I developed the program with C++ to be Final project of that year."
          />

          <Card
            isLeftCard={false}
            imgSrc="./sandbox.jpg"
            title="Sandbox Metaverse"
            content="I was able to stumble upon Sandbox Metaverse competition at summer of 2022. I was able to learn to design and create the sandbox. Unfortunately, I didn't pass the first round but it was agood experience."
          />
        </div>
      </div>
    </div>
  );
}
