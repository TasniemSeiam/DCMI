
import { Link } from 'react-scroll'
import style from './style.module.css'

const TopBtn = () => {
  return (
    <div id="scroll" className="scrollTop text-right">
          <Link to='home' className={`${style.topBtn}  text-center d-flex flex-column me-2 `}>
            <span><i className="fa-solid fa-angles-up"></i></span>
        </Link>
    </div>
  )
}

export default TopBtn