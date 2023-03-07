import { Link } from "react-router-dom";

const Footer_Categories = () => {
  return (
    <div className="footer_categories">
      <h2>Categorías</h2>
      <ul>
        <Link to={`/category/${"Ps4"}`}>
          <li>
            <h3>PlayStation 4</h3>
          </li>
        </Link>{" "}
        <Link to={`/category/${"Ps5"}`}>
          <li>
            <h3>PlayStation 5</h3>
          </li>
        </Link>
        <Link to={`/category/${"Xbox"}`}>
          <li>
            <h3>Xbox</h3>
          </li>
        </Link>{" "}
        <Link to={`/category/${"Nintendo"}`}>
          <li>
            <h3>Nintendo</h3>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Footer_Categories;
