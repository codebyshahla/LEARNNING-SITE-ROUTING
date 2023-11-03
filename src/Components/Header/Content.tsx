import React from "react";
import img5 from "../../assets/img5.jpg";

function Content() {
  return (
    <div>
      <div
        className="w-screen h-screen bg-cover"
        style={{ backgroundImage: `url(${img5})` }}
      >
        <div className="">
          <div className=" grid grid-cols-3 p-10 gap-10">
            <div className=" bg-black p-10 text-center text-white hover:transform hover:translate-y-[-20px] hover:duration-300 shadow-2xl hover:shadow-2xl hover:shadow-white ">
              <h1>BECOME A ANGULAR DEVOLOPER</h1><br />
              <p>
                AngularJS developers are experienced JavaScript <br />{" "}
                programmers that have a thorough understanding <br /> of
                theoretical Angular software engineering. Thus, <br /> there are
                multiple angular developer skills that one  <br />needs to be
                a successful Angular developer.
              </p>
            </div>
            <div className=" bg-black p-10 text-center text-white hover:transform hover:translate-y-[-20px] hover:duration-300 shadow-2xl hover:shadow-2xl hover:shadow-white">
              <h1>BECOME A FLUTTER DEVOLOPER</h1><br />
              <p>A Flutter developer is an individual who uses <br />the Flutter framework to develop cross-platform <br /> applications. Flutter developers use the Flutter SDK <br /> to craft beautiful and interactive applications. <br /> Flutter developers</p>
            </div>
            <div className=" bg-black p-10 text-center text-white hover:transform hover:translate-y-[-20px] hover:duration-300 shadow-2xl hover:shadow-2xl hover:shadow-white">
              <h1>BECOME A REACT DEVOLOPER</h1> <br />
              <p>React is the library for web and native user <br /> interfaces. Build user interfaces out of individual <br /> pieces called components written in JavaScript. <br /> React is designed to let you seamlessly combine <br /> components written by facebook devolopers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
