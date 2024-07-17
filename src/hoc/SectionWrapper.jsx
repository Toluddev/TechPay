import { styles } from "../styles";

const SectionWrapper = (Component, idName) => {
    function HOC() {
        return (
            <div className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
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

