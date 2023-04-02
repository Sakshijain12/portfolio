import "./topbar.scss";
import { Mail } from "@material-ui/icons";
import pdf from '../../Resume.pdf';

export default function Topbar({ menuOpen, setMenuOpen }) {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(pdf).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = pdf;
            alink.click();
        })
    })
}

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Sakshi Jain
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>jainsakshi2019@gmail.com</span>
            <button onClick={onButtonClick}> Download Resume </button>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
