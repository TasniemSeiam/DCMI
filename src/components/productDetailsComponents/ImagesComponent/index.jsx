import style from "./style.module.css";

const ImageComponent = ({ imgs, titles, onClick, id, currentImageIndex }) => {
  return (
    <div
      className={` ${
        style.ImageComponent
      } z-3 rounded overflow-hidden col-sm-2 col-3 h-100 thumbnail ${id} ${
        currentImageIndex === id ? "border border-success " : ""
      } `}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <div className="m-1 rounded overflow-hidden ">
        <img className="img-fluid" src={imgs} alt={titles} />
      </div>
    </div>
  );
};

export default ImageComponent;
