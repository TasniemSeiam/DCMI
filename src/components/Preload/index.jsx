import style from "./style.module.css";
export const Preloading = () => {
  return (
    <div id="preloader " className={`${style.preloader}`} >
      
            <div className={`${style.object}`} id="object_one"></div>
            <div className={`${style.object}`} id="object_two"></div>
            <div className={`${style.object}`} id="object_three"></div>
          
    </div>
  );
};
