import icon from "../assets/icon.png";

export default function Header() {
  return (
    <div className="container d-fluid justify-content-center align-items-center" >
      <h1 className="py-3 px-5 fs-5 text-center text-md-start" style={{ marginLeft: '0', marginRight: '0',  fontWeight:"bolder"}}>
        <img className="img-fluid" src={icon} style={{ maxWidth: '3%' }} alt="icon" />
        Frontender.itacademy
      </h1>
    </div>
  );
}