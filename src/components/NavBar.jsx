import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button}>Actions</MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default NavBar;
