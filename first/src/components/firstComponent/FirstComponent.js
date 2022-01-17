import './FirstComponent.css'
import Header from '../../assets/Header.png'
function FirstComponent() {
    return(
        <div>
            <img   src={Header}  alt="Header"  className='header'  />
            
        </div>
    )
}
export default FirstComponent;