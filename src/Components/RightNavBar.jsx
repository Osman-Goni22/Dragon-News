import FindUs from "./FindUs";
import SocialLogin from "./SocialLogin";


const RightNavBar = () => {
    return (
        <div>
            <h2 className="text-lg font-semibold mb-4
            ">Login With</h2>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    );
};

export default RightNavBar;