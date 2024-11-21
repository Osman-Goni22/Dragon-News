import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="grid grid-cols-1 gap-2">
             <button className="flex items-center btn"><FcGoogle  className="text-2xl"/>Login with Google</button>
             <button className="flex items-center btn"><FaGithub className="text-2xl" /> Login with Github</button>
        </div>
    );
};

export default SocialLogin;