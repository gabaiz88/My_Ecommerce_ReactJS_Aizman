import mario from "../assets/super-mario-bros-png-1.png"

const Welcome = () => {
  return (
    <div className="welcome">
        <h1> Bienvenidos a NIMIGAMES</h1>
        <img src={mario} alt="" />
    </div>
  )
}

export default Welcome