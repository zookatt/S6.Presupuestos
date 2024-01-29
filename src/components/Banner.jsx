import bannerImage from "../assets/banner.jpg";

export default function Banner() {
  const bannerStyle = {
    backgroundImage: ` url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '80%',
    height: '10rem',
    margin: '0 auto', 
    borderRadius: '8px',
  };

  return (
        
        <div className="card-body align-items-center img-fluid text-center py-5 px-5" style={bannerStyle}>
          <h5 className="card-title fs-1 align-text-top" style={{ zIndex: "1", color: "black", fontWeight:"bolder"}}>
            Consigue la mejor calidad
          </h5>
        </div>
    
  );
};