import style from "./style.module.css";

const ImageComponent = ({ imgs, titles }) => {
  return (
    <div
      className={` ${style.ImageComponent} rounded overflow-hidden z-3 col-2 h-100 bg-black me-1 `}
    >
      <img className=" img-fluid" src={imgs} alt={titles} />
    </div>
  );
};

export default ImageComponent;
