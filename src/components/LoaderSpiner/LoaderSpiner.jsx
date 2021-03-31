import Loader from 'react-loader-spinner';
import s from './LoaderSpiner.module.css';

const LoaderSpiner = () => {
  return (
    <div className={s['LoaderSpiner-container']}>
      <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs  
      />
    </div>
  )    
}

export default LoaderSpiner;