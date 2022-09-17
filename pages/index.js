import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home() {
  const contentBar = {
    backgroundColor: "#f8f8ff",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  };

  return (
    <div>
      <Navbar key="index" link="index" />

      <div className="m-5 mt-0 py-4" style={contentBar}>
        <div className="m-4 mt-5 d-flex justify-content-center overflow-hidden">
          {/* Introduction */}
          <img
            src="./me.jpg"
            alt=""
            width="250px"
            height="250px"
            style={{ objectFit: "cover" }}
            className="rounded-circle mx-4 my-auto"
          />
          <div
            style={{ height: "250px", maxWidth: "500px" }}
            className="mx-4 mb-3 p-2"
          >
            <h1>Nutthachai Singkaewvong</h1>
            <hr />
            <p>
              Hello, my name is Nutthachai. I&apos;m currently studying at
              Chiang Mai University as undergraduated student.
            </p>
          </div>
        </div>

        <div className="mx-4 my-4 vstack d-flex justify-content-center">
          <div className="m-3 mt-5">
            <h1 style={{ textAlign: "center" }}>My Skills</h1>
            <hr />
          </div>

          {/*cards*/}
          <Card
            isLeftCard={true}
            imgSrc="./programming.jpg"
            title="Programming"
            content="I can code with Python,Java,Javascript,C++ and C"
          />

          <Card
            isLeftCard={false}
            imgSrc="./plan.jpg"
            title="Complex Planning"
            content="I was a very good planner since childhood and over years of strict planning and vast experience, I made my day easier!"
          />

          <Card
            isLeftCard={true}
            imgSrc="./analysis.webp"
            title="Quick solving/Problem Analysis"
            content="Along with good planning, I also developed both quick solving and problem analysis skill. I can analyzed problem and then solved it with ease!"
          />
        </div>
      </div>
    </div>
  );
}
