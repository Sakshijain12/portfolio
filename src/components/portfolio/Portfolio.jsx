import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  programmingPortfolio,
  libraryPortfolio,
  toolsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("programming");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "programming",
      title: "Programming",
    },
    {
      id: "library",
      title: "Library/Framework",
    },
    {
      id: "tools",
      title: "Tools",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "programming":
        setData(programmingPortfolio);
        break;
      case "library":
        setData(libraryPortfolio);
        break;
      case "tools":
        setData(toolsPortfolio);
        break;
      default:
        setData(programmingPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Skills</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
