import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

const Category = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      {/* Desktop Dropdown */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Category</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Machine Learning</NavigationMenuLink>
                <NavigationMenuLink>Game Development</NavigationMenuLink>
                <NavigationMenuLink>Software Development</NavigationMenuLink>
                <NavigationMenuLink>DSA Courses</NavigationMenuLink>
                <NavigationMenuLink>Full Stack Development</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden">
        <button
          className="text-gray-700"
          onClick={() => setIsMobile(!isMobile)}
        >
          Category
        </button>
        {isMobile && (
          <div className="absolute bg-white border rounded shadow-md">
            <ul className="p-2">
              <li className="p-2 hover:bg-gray-100">Machine Learning</li>
              <li className="p-2 hover:bg-gray-100">Game Development</li>
              <li className="p-2 hover:bg-gray-100">Software Development</li>
              <li className="p-2 hover:bg-gray-100">DSA Courses</li>
              <li className="p-2 hover:bg-gray-100">Full Stack Development</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
