import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="border-r border-b-gray-50">
      <Link to="/" className="flex items-center px-5">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-white uppercase text-subtitle font-raleway">
            Bileton
          </h6>
          <span className="text-sm font-medium text-yellow-500 font-raleway">
            "Tonla bilet"
          </span>
        </div>
      </Link>
    </div>
  );
}
