import { Icons } from "../../../constant";
import { FooterInfo } from "../../../constant";
import { footerShop } from "../../../constant";
import { Link } from "react-router-dom";
import AosDiv from "../../_coreComponent/aosEffect";
const Footer = () => {
  return (
    <div className=" font-raleway">
      <div className="w-full ">
        <div className="grid grid-cols-1 border-t sm:grid-cols-2 md:grid-cols-4 modeBorder">
          <div className="overflow-hidden h-80">
            <AosDiv
              className="flex flex-col justify-between border-r h-80 modeBorder"
              aosType="fade-up"
              aosDuration={500}
            >
              <div className="flex items-center p-8 justify-left">
                <h1 className="text-3xl font-light"> Feed Back </h1>
              </div>
              <div className="flex flex-col mb-4 mx-5">
                <input
                  type="email"
                  placeholder="E-mail"
                  className=" border-b-2  py-2 px-3 mb-2 outline-none bg-black focus:border-yellow-500"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  placeholder="Feed Back"
                  rows={4}
                  className=" border-b-2  py-2 px-3 mb-2 outline-none bg-black focus:border-yellow-500"
                  // value={complaint}
                  // onChange={(e) => setComplaint(e.target.value)}
                ></textarea>
              </div>
            </AosDiv>
          </div>
          <div className="overflow-hidden h-80">
            <AosDiv
              className="border-t border-r h-80 sm:border-t-0 modeBorder"
              aosType="fade-up"
              aosDuration={1000}
            >
              <div className="flex items-center p-8 justify-left">
                <h1 className="text-3xl font-light">Event</h1>
              </div>
              <div className="flex flex-col pl-8 gap-y-3 justify-left ">
                {footerShop.map((item, index) => (
                  <Link key={index} to={item.url}>
                    <span className="text-gray-600 hover:text-yellow-500">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </AosDiv>
          </div>

          <div className="overflow-hidden h-80">
            <AosDiv
              className="border-t border-r h-80 sm:border-t-0 modeBorder"
              aosType="fade-up"
              aosDuration={1500}
            >
              <div className="flex items-center p-8 justify-left">
                <h1 className="text-3xl font-light">Info</h1>
              </div>
              <div className="flex flex-col justify-start pl-8 gap-y-3 items-left ">
                {FooterInfo.map((item, index) => (
                  <Link key={index} to={item.url}>
                    <span className="text-gray-600 hover:text-yellow-500">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </AosDiv>
          </div>
          <div className="overflow-hidden h-80">
            <AosDiv
              className="border-t border-r h-80 sm:border-t-0 modeBorder"
              aosType="fade-up"
              aosDuration={2000}
            >
              <div className="flex flex-col ">
                <div className="flex pt-8 pl-8 justify-left">
                  <h1 className="text-3xl font-light">Social Media</h1>
                </div>
                <div className="flex justify-start p-8 ">
                  <ul className="flex gap-2">
                    {Icons.map((item, index) => (
                      <li
                        key={index}
                        className="text-gray-600 cursor-pointer hover:text-yellow-500"
                      >
                        {item.icon}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative flex flex-col p-8 justify-left ">
                <div className="flex items-center justify-start mb-10">
                  {/* <ThemeButton /> */}
                </div>
                <div className="absolute bottom-0">
                  <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                </div>
              </div>
            </AosDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
