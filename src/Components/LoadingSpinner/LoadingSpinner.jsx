import { HashLoader } from "react-spinners";


const LoadingSpinner = () => {
    return (
        <div>
            <div className="mt-20 flex justify-center items-center">
                <HashLoader
                    color="#0f503c"
                    loading
                    size={150} />
            </div>
        </div>
    );
};




export default LoadingSpinner;