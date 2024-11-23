import style from "./style.module.css";
const HeadersOfPage = ({ header2,header4 }) => {
  return (
    <div className={` ${style.headers} my-3 pb-4 `} style={header2=="Recent Blog"? {textAlign:"start" }:{textAlign:"center"}} >
      <h4>{ header4}</h4>
      <h2>{header2}</h2>
    </div>
  );
};

export default HeadersOfPage;
