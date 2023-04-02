import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "React Native Developer - Dichroic Labs",
      desc:
        "Worked on the development of mobile application (both Android and iOS) which is social media platform, named as ”Hoffr”, for old age group people.",
      img:
        "./assets/react native.png",
      type: "Internship",
      link:"https://github.com/Sakshijain12/House_of_Friends",
    },
    {
      id: "2",
      icon: "./assets/vector_ui-ux.jpg",
      title: "UI-UX Designer - Leveraged Growth",
      desc:
        "Work on Live Project - Invest In Yourself. Designed the layouts for Web apps, mobile apps, web pages. Competitive analysis and critical analysis of market competitors was done.",
      img:
        "./assets/UI-UX.gif",
      type:"Internship",
      link:"https://www.linkedin.com/in/sakshi-jain-083855213/overlay/1635496481949/single-media-viewer/?profileId=ACoAADYNhyMBeG1uLfWG5cGIYfJKoR44QAVFQfw",
    },
    {
      id: "3",
      icon: "./assets/arduino.png",
      title: "Replication of Human limb Motion",
      desc:
        "This project replicates the motion of human upper limb in real-time with the use of Arduino, MPU6050 sensors.",
      img:
        "./assets/human limb.png",
      type:"Project",
      link:"https://github.com/Sakshijain12/Replication-of-human-limb-motion-in-real-time",
    },
    {
      id: "4",
      icon: "./assets/ml.jpg",
      title: "Machine Learning",
      desc:
        "Course project on Spectral Relaxation by K-means Clustering.",
      img:
        "./assets/Kmeans.jpg",
      type:"Project",
      link:"https://github.com/Sakshijain12/Spectral-Relaxation-by-K-means-Clustering",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h1>Work and Experience</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span> <a href={d.link} target="_blank"> {d.type} </a> </span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
