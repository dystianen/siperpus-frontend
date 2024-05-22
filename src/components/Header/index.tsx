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
} from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { openedPopupLogin, openedPopupRegister } from "@/store/GlobalState";
import { useWindowScroll } from "@mantine/hooks";
import { useParserToken } from "@/hooks/useParserToken";
import { FaChevronDown } from "react-icons/fa6";
import { deleteCookie } from "cookies-next";
import { useCheckLoggedIn } from "@/hooks/useCheckLoggedIn";
import PopupLogin from "../PopupLogin";
import PopupRegister from "../PopupRegister";
import colors from "@/config/colors";

const Header = () => {
  const isLoggedIn = useCheckLoggedIn();
  const router = useRouter();
  const pathname = usePathname();
  const dataToken = useParserToken();
  const [scroll] = useWindowScroll();
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
      bg={colors.neutral[3]}
      style={{
        zIndex: 99,
        boxShadow:
          scroll.y > 50 ? `0 ${rem(3)} ${rem(10)} 0 ${colors.neutral[4]}` : "",
      }}
    >
      <Container size={"lg"}>
        <Group justify="space-between">
          <Image
            src={"/assets/imgs/logo.png"}
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
                  borderBottom:
                    pathname === it.href
                      ? `2px solid ${colors.primary[1]}`
                      : "",
                }}
              >
                {it.text}
              </UnstyledButton>
            ))}
          </Group>

          {isLoggedIn ? (
            <Menu
              shadow="md"
              width={200}
              styles={{
                dropdown: {
                  backgroundColor: colors.neutral[3],
                },
              }}
            >
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
                  <Text>Favorite</Text>
                </Menu.Item>
                <Menu.Item onClick={() => router.push("/borrowed")}>
                  <Text>Borrowed</Text>
                </Menu.Item>
                <Menu.Item onClick={() => deleteCookie("authToken")}>
                  <Text>Logout</Text>
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          ) : (
            <Button
              bg={colors.primary[0]}
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
