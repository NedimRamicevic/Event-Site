import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineInstagram, AiOutlinePhone } from "react-icons/ai";
export const mainMenu = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/events",
    title: "Events",
  },
  {
    path: "/venue",
    title: "Venues",
  },

  {
    path: "/artist",
    title: "Artists",
  },
];
export const footerShop = [
  {
    id: 1,
    name: "All",
    url: "/",
  },
  {
    id: 2,
    name: "Papular",
    url: "/",
  },
  {
    id: 3,
    name: " Newest",
    url: "/",
  },
];

export const FooterInfo = [
  {
    id: 1,
    name: "SSS",
    url: "/modal/SSS",
  },
  {
    id: 2,
    name: "Terms of Use",
    url: "/modal/terms",
  },
  {
    id: 3,
    name: "Privacy Policy",
    url: "/modal/privacy",
  },
  {
    id: 3,
    name: "Feedbacks",
    url: "/modal/returns",
  },
];

export const Icons = [
  {
    id: 1,
    icon: <AiOutlineInstagram className="w-7 h-7" />,
  },
  {
    id: 1,
    icon: <AiOutlinePhone className="w-7 h-7" />,
  },
  {
    id: 1,
    icon: <FaXTwitter className="w-7 h-7" />,
  },
];
