import Accordian from "./Accordian";
import Banner from "./Banner";
import Cards from "./Cards";
import Rescue from "./Rescue";
import Testimonials from "./Testimonials";
import Whyus from "./Whyus";

const HomePage = () => {
  return (
    <div>
      <Banner
        title="Hire World’s Best Talent Within 24 Hours"
        desc="Technology solution is a flexible platform to vet and hire a talent like software developers, designers and quality assurance engineers that match your time zone and work model."
        titlePhp="Hello"
      />
      <Cards />
      <Whyus />
      <Testimonials />
      <Accordian />
      <Rescue />
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
