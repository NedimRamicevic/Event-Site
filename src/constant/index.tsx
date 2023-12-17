import {FaXTwitter} from "react-icons/fa6"
import {AiOutlineInstagram,AiOutlinePhone} from "react-icons/ai"
export const mainMenu = [
  {
    path: "/",
    title: "Ana Sayfa",
  },
  {
    path: "/events",
    title: "Etkinlikler",
  },
  {
    path: "/venue",
    title: "Mekanlar",
  },
  
  {
    path: "/artist",
    title: "Artistler",
  },
];
export const footerShop = [
  {
    id:1,
    name:"Tüm Liste",
    url:"/",

  },
  {
    id:2,
    name:"Populer",
    url:"/",
  },
  {
    id:3,
    name:"En Yeni",
    url:"/",
  },

]

  export const FooterInfo = [
    {
      id:1,
      name:"SSS",
      url:"/modal/SSS",

    },
    {
      id:2,
      name:"Hizmet Koşulları",
      url:"/modal/terms",
    },
    {
      id:3,
      name:"Gizlilik Politikası",
      url:"/modal/privacy",
    },
    {
      id:3,
      name:"Geri Dönüşler",
      url:"/modal/returns",
    },
    
  ] 

  export const Icons =[
    {
      id:1,
      icon:<AiOutlineInstagram className="w-7 h-7"/> ,
    },
    {
      id:1,
      icon: <AiOutlinePhone className="w-7 h-7"/>,
    },
    {
      id:1,
      icon:<FaXTwitter className="w-7 h-7"/> ,
    },
  ]
