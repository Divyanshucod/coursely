import React, { PropsWithChildren } from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

type Props = PropsWithChildren<{}>

const Category = (props: Props) => {
  return (
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
  )
}

export default Category