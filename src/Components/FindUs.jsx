
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
const FindUs = () => {
    return (
        <div>
            <h2 className="text-2xl my-5 font-semibold">Find Us On</h2>
            <div className="join flex join-vertical">
                <button className="btn justify-start"><FaFacebook className="text-2xl" />Facebook</button>
                <button className="btn justify-start"><FaTwitter className="text-2xl text-green-400" />Twitter</button>
                <button className="btn justify-start"><FaInstagramSquare className="text-2xl" />Instragram</button>
            </div>
        </div>
    );
};

export default FindUs;