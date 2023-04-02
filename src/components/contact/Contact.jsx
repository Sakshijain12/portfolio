import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';


export default function Contact() {
  
  const [message, setMessage] = useState(false);

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_y876paa', 'template_2j9z5ga', form.current, 'user_PiGNcQrQSjTY5mxA6ZI5d')
    .then(
      result => console.log(result.text),
      error => console.log(error.text),
    );
    e.target.reset();
  };
  return (
    <div className="contact" id="contact">
      <div class="left">
    <a href="https://github.com/Sakshijain12" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" class="icon" /> </a>
    <a href="https://www.linkedin.com/in/sakshi-jain-083855213/" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" class="icon" /> </a>
    <p></p>
    <a href="https://www.hackerrank.com/jain_60" target="_blank"> <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/160_Hackerrank_logo_logos-512.png" class="icon" /> </a>
    <a href="https://www.codechef.com/users/sakshi_1212" target="_blank"> <img src="https://icons-for-free.com/iconfiles/png/512/codechef-1324440139527402917.png" class="icon" /> </a>
</div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" required id="name" for="name"/>
          <input type="email" placeholder="Email" name="email" required id="email" for="email"/>
          <textarea placeholder="Message" id="msg" name="msg" required for="msg" ></textarea>
          <button type="submit" value="Send">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
          {/* {setMessage(false)} */}
        </form>
      </div>
    </div>
  );
}
