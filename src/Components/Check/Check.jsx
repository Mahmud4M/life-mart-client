import { HashLoader } from "react-spinners";




const Check = () => {


    return (
        <div className="mt-20 flex justify-center items-center">
            <HashLoader
                color="#0f503c"
                loading
                size={150} />
        </div>
    );
};

export default Check;