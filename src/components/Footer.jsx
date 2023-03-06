import Footer_Networks from "./Footer_Networks"
import Footer_AboutUs from "./Footer_AboutUs"
import Footer_Categories from "./Footer_Categories"

const Footer = () => {
  return (
    <div className="footer">
        <Footer_AboutUs/>
        <Footer_Categories/>
        <Footer_Networks/>
    </div>
  )
}

export default Footer