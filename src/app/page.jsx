import Image from "next/image";

const Homepage = () => {
  return <div className="h-full flex flex-col"> 
    {/* Image container */}
    <div className="h-1/2 relative bg">
      <Image src='/hero.webp' alt="hero Image" fill className="object-contain"/>
    </div>
    {/* Text container */}
    <div className="h-1/2"></div>
  </div>;
};

export default Homepage;
