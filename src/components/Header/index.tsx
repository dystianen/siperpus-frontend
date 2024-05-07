"use client";
import {
  Box,
  Button,
  Container,
  Group,
  Menu,
  Text,
  UnstyledButton,
} from "@mantine/core";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import PopupLogin from "../PopupLogin";
import PopupRegister from "../PopupRegister";
import { useAtom } from "jotai";
import { openedPopupLogin, openedPopupRegister } from "@/config/GlobalState";
import { useLocalStorage } from "@mantine/hooks";
import { useParserToken } from "@/hooks/useParserToken";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";

const Header = () => {
  const router = useRouter();
  const dataToken = useParserToken();
  const pathname = usePathname();
  const [token, _, removeToken] = useLocalStorage({ key: "token" });
  const [openedLogin, setOpenPopupLogin] = useAtom(openedPopupLogin);
  const [openedRegister, setOpenPopupRegister] = useAtom(openedPopupRegister);

  const menu = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Categories",
      href: "/categories",
    },
  ];

  const renderStyleMenuItem = {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 10,
  };

  return (
    <Box
      pos={"fixed"}
      w={"100%"}
      h={90}
      top={0}
      bg={"#DDDDDD"}
      style={{ zIndex: 99 }}
    >
      <Container size={"xl"}>
        <Group justify="space-between">
          <Image src={"/logo.png"} width={100} height={90} alt="logo" />
          <Group>
            {menu.map((it, index) => (
              <UnstyledButton
                key={index}
                onClick={() => router.push(it.href)}
                fw={500}
                style={{
                  borderBottom: it.href === pathname ? "2px solid #557153" : "",
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
                    <Text fw={600} fz={20}>
                      Hi, {dataToken?.user_name}
                    </Text>
                    <FaChevronDown />
                  </Group>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item>
                  <motion.div
                    style={renderStyleMenuItem}
                    whileHover={{
                      backgroundColor: "#c2c2c2",
                    }}
                  >
                    <Text c={"primary.1"}>Profile</Text>
                  </motion.div>
                </Menu.Item>
                <Menu.Item onClick={removeToken}>
                  <motion.div
                    style={renderStyleMenuItem}
                    whileHover={{
                      backgroundColor: "#c2c2c2",
                    }}
                  >
                    <Text c={"primary.1"}>Logout</Text>
                  </motion.div>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Button
              bg={"primary.0"}
              radius={"xl"}
              onClick={() => setOpenPopupLogin(true)}
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
