'use client'
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">UX/UI designer</p>
            <p className="hidden xs:block">xs</p>
            <p className="hidden sm:block">sm</p>
            <p className="hidden md:block">md</p>
            <p className="hidden lg:block">lg</p>
            <p className="hidden xl:block">xl</p>

          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Github" href="https://github.com/Agabovino">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>        <NavbarItem className="hidden md:flex">
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href="https://github.com/Agabovino">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />

        <Dropdown className="" backdrop="blur">
          <DropdownTrigger>

            <button className="flex justify-center "><img className="w-1/2" src="/icons/drag_handle_24dp_434343_FILL0_wght400_GRAD0_opsz24.png" alt="" /></button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" variant="faded">

            <DropdownItem href="/" key="inicio" >Início</DropdownItem>
            <DropdownItem href="#sobremim" key="sobre" >Sobre mim</DropdownItem>
            <DropdownItem href="#portfolio" key="portfolio" >Portfolio</DropdownItem>
            <DropdownItem href="#formacao" key="formacao" >Formação</DropdownItem>
            <DropdownItem href="#contato" key="contato">Contato</DropdownItem>

          </DropdownMenu>
        </Dropdown>

      </NavbarContent>

      <NavbarMenu>

        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
