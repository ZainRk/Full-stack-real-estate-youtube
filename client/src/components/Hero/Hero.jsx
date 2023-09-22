import "./Hero.css";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar/SearchBar";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Come, live<br />
              The new kind
              <br /> of Living
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>A home is a cherished memory that lasts forever.</span>
            <span>Crammed-up hostels or cooped-up PGs - not much of a choice, is it? <br/> Looking for a fancy and cosy place to live?</span>
            <span>Well, your search can end now because DreamStays has exactly what you need.</span>
            <span>We meticulously select affordable PG accommodations<br/> with modern amenities and well-furnished rooms.<br/> With DreamStays you can choose the perfect home that combines<br/> affordability, luxury, comfort, and a sense of belonging.</span>
          </div>

          <SearchBar/>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./pg.png" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
