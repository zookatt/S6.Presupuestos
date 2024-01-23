import bannerImage from "../assets/banner.jpg";

export default function Banner() {
  const bannerStyle = {
    backgroundImage: ` linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '64%',  
    margin: '0 auto', 
    border: '1px solid #ddd', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  
    borderRadius: '8px',
  };

  return (
    
        <div className="card-body align-items-center img-fluid text-center py-5 px-5" style={bannerStyle}>
          <h5 className="card-title fs-1 align-text-top" style={{ zIndex: "1", color: "black", backgroundColor:"white"}}>
            Consigue la mejor calidad
          </h5>
        </div>
    
  );
};