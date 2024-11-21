import style from './style.module.css'
export const FunFactArea = () => {
  return (
      <div className={`${style.funFactArea} fun-fact-bg overflow-hidden py-5 my-5`}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12 ">
                      <div className={`${style.singleFact} d-flex d-sm-block d-lg-flex align-items-center mb-3`}>
                            <div className="me-3">
                              <span className={`${style.themeColor} d-inline-block counter`}>12</span>
                               
                            </div>
                            <p className="text-white  mb-0">Years of <br/> Experience</p>
                        </div>
                    </div>
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12  d-lg-flex justify-content-center">
                        <div className={`${style.singleFact} d-flex d-sm-block d-lg-flex align-items-center mb-3`}>
                            <div className="me-3 d-flex align-content-start">
							<span className={`${style.themeColor} d-inline-block counter`}>3</span>
                                <span className={`${style.themeColor} d-inline-block `}>K</span>
                                <span className={` pre ${style.themeColor} mt-1 d-inline-block `}>+</span>
                            </div>
                            <p className="text-white  mb-0">Worldwide <br/> Clients</p>
                        </div>
                    </div>
                    <div className="col-xl-4  col-lg-4  col-md-4  col-sm-4 col-12 d-lg-flex justify-content-end">
                        <div className={`${style.singleFact} d-flex d-sm-block d-lg-flex align-items-center mb-3`}>
                            <div className="me-3 d-flex align-content-start">                                
                                <span className={`${style.themeColor} d-inline-block counter`}>70</span>
                                <span className={` pre ${style.themeColor} mt-1 d-inline-block `}>+</span>
                            </div>
                            <p className="text-white mb-0">Various <br/>Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
