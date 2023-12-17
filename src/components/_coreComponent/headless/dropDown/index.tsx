import { Menu } from "@headlessui/react";
import classNames from "classnames";
import { FC } from "react";
import { Link } from "react-router-dom";
import React from 'react'


interface DropDownProps {
  list: {
    name: string;
    id?: string;
  }[];
  title?: string;
  className?: string;
  background: string;
  width: string;
  shadow: string;
  onclick?: (value: string) => void;
  linkActive?: boolean;
  type: string;
  icon?: React.ReactNode

}

const DropDown: FC<DropDownProps> = ({
  list,
  title,
  className,
  background,
  width,
  shadow,
  onclick,
  linkActive,
  type,
  icon
}) => {
  return (
    <div className={`${className}  transition-colors `}>
      <Menu>
          <div>
            <Menu.Button
              className={classNames(
                `${width} flex font-raleway font-medium  p-2 rounded-md  items-center justify-between `
              )}
            >
            {icon ? icon : title}
            </Menu.Button>
            <div
              className={`absolute overflow-auto w-[150px] ${shadow} ${className}   z-20  mt-2  ${background}`}
            >
              <Menu.Items className="border border-yellow-500">
                {list && list.map((item, i) => (
                  <Menu.Item key={i} >
                    {({ active }) => (
                      <div className="p-1 pt-3 pl-3 text-white ">
                        {linkActive ? (
                          <Link to={`/${type}/${item.name}`}>
                            <button
                              onClick={() => {
                                onclick && onclick(item.name);
                              }}
                              className={classNames({
                                "text-yellow-300 font-bold": active,
                              })}
                            >
                              {item.name}
                            </button>
                          </Link>
                        ) : (
                          <button
                            onClick={() => {
                              onclick && onclick(item.name);
                            }}
                            className={classNames("text-fourth", {
                              "text-primary font-bold": active,
                            })}
                          >
                            {item.name}
                          </button>
                        )}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </div>
          </div>
      </Menu>
    </div>
  );
};

export default DropDown;
