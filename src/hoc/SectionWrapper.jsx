import { styles } from "../styles";

const SectionWrapper = (Component, idName, fullWidth = false) => {
    function HOC() {
        return (
          <div className={`${styles.padding} ${fullWidth ? 'w-full' : 'max-w-7xl mx-auto'} relative z-0`}>
            <span className="hash-span" id={idName}>
              &nbsp;
            </span>
            <Component />
          </div>
        );
      }
    
      return HOC;
}

export default SectionWrapper;

