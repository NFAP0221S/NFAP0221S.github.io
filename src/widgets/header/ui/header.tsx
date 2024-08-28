"use client";

import { useState } from "react";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarMenuToggle,
  NavbarItem, 
  NavbarMenu,
  // NavbarMenuItem,
  Link, 
  DropdownItem, 
  DropdownTrigger, 
  Dropdown, 
  DropdownMenu, 
  Avatar,
  Chip
} from "@nextui-org/react";
import DarkModeSwitch from "@/shared/_components/DarkModeSwitch";
import { SplitCategories } from "@/features/render-category";
import { CatListProps } from "@/shared/types/component";

export const Header = ({categoryList}: CatListProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buildDate = process.env.NEXT_PUBLIC_BUILD_DATE || "xx.xx.xx";

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="lg:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarBrand className="flex justify-start gap-4">
        <p className="font-bold text-inherit">Hansol.io</p>
        <Chip color="success" variant="dot">Update: {buildDate}</Chip>
      </NavbarBrand>

      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Github
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Profile
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            etc..  
          </Link>
        </NavbarItem>
      </NavbarContent> */}

      <NavbarContent as="div" justify="end">
        <DarkModeSwitch />
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="success"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              {/* <p className="font-semibold">Signed in as</p> */}
              {/* <p className="font-semibold">vawav11@gmail.com</p> */}
              Lee HanSol
            </DropdownItem>
            <DropdownItem key="drop-mail">vawav11@gmail.com</DropdownItem>
            <DropdownItem key="drop-job">Frontend Jr</DropdownItem>
            <DropdownItem key="drop-skill-1">React</DropdownItem>
            <DropdownItem key="drop-skill-2">TS</DropdownItem>
            {/* <DropdownItem key="system">System</DropdownItem> */}
            {/* <DropdownItem key="configurations">Configurations</DropdownItem> */}
            {/* <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem> */}
            {/* <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
      <NavbarMenu>
        <SplitCategories categoryList={categoryList} />
      </NavbarMenu>

    </Navbar>
  );
};
