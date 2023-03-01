import { Center, Box, Image } from "@chakra-ui/react";
import image from "../assets/bg.png";

const Welcome = () => {
  return (
   <Center>
        <Box boxSize="100%">
          <Image className="wallpaper"
            src={image}
            alt="wallpaper"
          />
          <div className="capa"></div>
        </Box>
      </Center>
  )
}

export default Welcome