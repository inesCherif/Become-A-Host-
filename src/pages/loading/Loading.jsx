import useLoadingDots from '../../hooks/useLoadingDots';
import "./Loading.css";

const Loading = () => {
  const { activeDotIndex } = useLoadingDots();
  
  return (
    <div className="all">
      <span className={`dot ${activeDotIndex === 0 ? 'active-dot' : ''}`}></span>
      <span className={`dot ${activeDotIndex === 1 ? 'active-dot' : ''}`}></span>
      <span className={`dot ${activeDotIndex === 2 ? 'active-dot' : ''}`}></span>
    </div>
  )
}

export default Loading;

