import { Textarea, Container } from "@chakra-ui/react";
import { useState } from "react";

const Contact_Box = () => {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <Container className="contact_box" maxW="container.lg">
      <div className="text_area">
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder="Here is a sample placeholder"
          size="sm"
        />{" "}
      </div>
    </Container>
  );
};

export default Contact_Box;
