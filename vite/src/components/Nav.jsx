import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { useHistory } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const history = useHistory();

  const handleLogout = () => {
    // Limpiar datos del usuario y marcar como no "logueado"
    localStorage.removeItem("user");
    localStorage.setItem("IsLoggingIn", "false");

    // Redirigir a la página principal
    history.push("/");
    window.location.href = "/";
  };

  return (
    <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <a href="/dashboard">
            {" "}
            <img
              src="limpiolux-icon.svg"
              class="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/dashboard">
            Listas de Verificación
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Formularios enviados
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="/"
          onClick={handleLogout}
          color="danger"
          variant="flat"
        >
          <AiOutlineLogout />
          Salir
        </Button>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="primary" className="w-full" href="/dashboard" size="lg">
            Listas de Verificación
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="primary" className="w-full" href="/" size="lg">
            Formularios enviados
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

export default Nav;
