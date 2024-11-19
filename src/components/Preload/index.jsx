import style from "./style.module.css"
export const Preloading = () => {
  return (
    <div id="preloader">
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <div className={`${style.object}`} id="object_one"></div>
                    <div className={`${style.object}`} id="object_two"></div>
                    <div className={`${style.object}`} id="object_three"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
