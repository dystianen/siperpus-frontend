"use client";
import {
  Box,
  Button,
  Container,
  Group,
  Image,
  Menu,
  Text,
  UnstyledButton,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import PopupLogin from "../PopupLogin";
import PopupRegister from "../PopupRegister";
import { useAtom } from "jotai";
import { openedPopupLogin, openedPopupRegister } from "@/config/GlobalState";
import { useLocalStorage, useWindowScroll } from "@mantine/hooks";
import { useParserToken } from "@/hooks/useParserToken";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const dataToken = useParserToken();
  const pathname = usePathname();
  const theme = useMantineTheme();
  const [scroll] = useWindowScroll();
  const [token, _, removeToken] = useLocalStorage({ key: "token" });
  const [openedLogin, setOpenPopupLogin] = useAtom(openedPopupLogin);
  const [openedRegister, setOpenPopupRegister] = useAtom(openedPopupRegister);

  const menu = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Books",
      href: "/books",
    },
  ];

  return (
    <Box
      pos={"fixed"}
      w={"100%"}
      h={90}
      top={0}
      bg={"#0b131d"}
      style={{
        zIndex: 99,
        boxShadow: scroll.y > 50 ? `0 ${rem(3)} ${rem(10)} 0 rgba(255, 255, 255, .1)` : "",
      }}
    >
      <Container size={"lg"}>
        <Group justify="space-between">
          <Image
            src={"/logo.png"}
            w={{ base: 70, md: 100 }}
            h={{ base: 70, md: 90 }}
            alt="logo"
          />
          <Group>
            {menu.map((it, index) => (
              <UnstyledButton
                key={index}
                onClick={() => router.push(it.href)}
                fw={500}
                style={{
                  borderBottom: pathname === it.href ? `2px solid ${theme.colors.success[3]}` : "",
                }}
              >
                {it.text}
              </UnstyledButton>
            ))}
          </Group>

          {token ? (
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <UnstyledButton>
                  <Group align="center">
                    <Text fw={600} fz={{ base: 16, md: 20 }}>
                      Hi, {dataToken?.user_name}
                    </Text>
                    <FaChevronDown />
                  </Group>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item onClick={() => router.push("/favorite")}>
                  <Text c={"neutral.8"}>Favorite</Text>
                </Menu.Item>
                <Menu.Item onClick={() => router.push("/borrowed")}>
                  <Text c={"neutral.8"}>Borrowed</Text>
                </Menu.Item>
                <Menu.Item
                  onClick={() => {
                    router.refresh();
                    removeToken();
                  }}
                >
                  <Text c={"neutral.8"}>Logout</Text>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Button
              bg={"success.9"}
              radius={"xl"}
              onClick={() => setOpenPopupLogin(true)}
              fz={{ base: "xs", md: "md" }}
            >
              Login/Register
            </Button>
          )}
        </Group>
      </Container>

      <PopupLogin opened={openedLogin} close={() => setOpenPopupLogin(false)} />
      <PopupRegister
        opened={openedRegister}
        close={() => setOpenPopupRegister(false)}
      />
    </Box>
  );
};

export default Header;
