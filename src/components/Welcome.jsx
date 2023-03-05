import mario from "../assets/super-mario-bros-png-1.png"
import welcome_nimi from "../assets/welcome_nimi.png"

const Welcome = () => {
  return (
    <div className="welcome">
        <img id="welcome_nimi" src={welcome_nimi} alt="logo_welcome"/>
        <img src={mario} alt="welcome_mario" width={600}/>
    </div>
  )
}

export default Welcome