import { Textarea, Container } from "@chakra-ui/react";
import { useState } from "react";

const Contact = () => {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
    console.log(value);
  };

  return (
    <div>
      <div className="contact_box">
        <h2 id="title">Dejanos tu mensaje</h2>
        <div className="text_area">
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Dejanos tu mensaje aca.."
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
