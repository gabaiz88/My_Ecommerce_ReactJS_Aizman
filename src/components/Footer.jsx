import Footer_Networks from "./Footer_Networks"
import Footer_AboutUs from "./Footer_AboutUs"
import Footer_Categories from "./Footer_Categories"
import Footer_Contact from "./Footer_Contact"

const Footer = () => {
  return (
    <div className="footer">
        <Footer_AboutUs/>
        <Footer_Categories/>
        <Footer_Contact/>
        <Footer_Networks/>
    </div>
  )
}

export default Footer