import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col"> 
    {/* Image container */}
    <div className="h-1/2 relative bg">
      <Image src='/hero.webp' alt="hero Image" fill className="object-contain"/>
    </div>
    {/* Text container */}
    <div className="h-1/2">
      {/* title */}
      <h1>Hi, I am Rikhi</h1>
      {/* description */}
      <p>Full Stack Web Developer and White Hat <br /> Certified from University of Michigan, Google, University of Helsinki, Microsoft and Member of CIPS Ontario</p>
      {/* Buttons */}
      <div>
        <div>See my Resume</div>
        <div>See my work</div>
      </div>
    </div>
  </div>;
};

export default Homepage;
