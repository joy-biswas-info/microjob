import GigCard from "../../components/gigCard/gigCard";
import { gigsData } from "../../data.js";
import "./Gigs.scss";

const Gigs = () => {
  return (
    <div className="gigs">
      <div className="container">
        <div className="breadcumbs">Home &gt; Design</div>
        <h1>Ai Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr&apos;s AI
          artists
        </p>
        <div className="option">
          <div className="left">
            <form action="#">
              <span>Budget : </span>
              <input type="number" placeholder="Min" />
              <input type="number" placeholder="Max" inputMode="numeric" />
              <input type="submit" value="Apply" />
            </form>
          </div>
          <div className="right">
            <form action="#">
              <span>Sort By : </span>
              <select name="sort" id="sort">
                <option value="best-selling">Best selling</option>
                <option value="new-seller">New Seller</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
            </form>
          </div>
        </div>
        <div className="gig-count">
          56,2345 <span>Services available</span>
        </div>
        <div className="gig-items">
          {gigsData.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
