import './loader.css'
import Spinner from 'react-bootstrap/Spinner';
import ReactDOM from 'react-dom';

const Loader = () => {
  return ReactDOM.createPortal (
    <div className='spinner'>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>,
    document.getElementById('loader')
  )
}

export default Loader