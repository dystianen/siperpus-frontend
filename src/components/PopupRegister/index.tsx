import { openedPopupLogin, openedPopupRegister } from "@/config/GlobalState";
import {
  Button,
  Modal,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useSetAtom } from "jotai";
import React from "react";
import { LuLock, LuMail, LuUser2 } from "react-icons/lu";
import { SiGooglemaps } from "react-icons/si";

type PopupLoginTypes = {
  opened: boolean;
  close: () => void;
};

const PopupRegister = ({ opened, close }: PopupLoginTypes) => {
  const setOpenPopupLogin = useSetAtom(openedPopupLogin);
  const setOpenPopupRegister = useSetAtom(openedPopupRegister);
  const handleClickLoginNow = () => {
    setOpenPopupRegister(false);
    setOpenPopupLogin(true);
  };

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <Text fw={"bold"} fz={24}>
          Sign Up, Here!
        </Text>
      }
      centered
    >
      <Stack>
        <TextInput
          label="Username"
          placeholder="username"
          leftSection={<LuUser2 />}
        />
        <TextInput
          label="Email"
          placeholder="email"
          type="email"
          leftSection={<LuMail />}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="password"
          leftSection={<LuLock />}
        />
        <TextInput
          label="Address"
          placeholder="address"
          leftSection={<SiGooglemaps />}
        />

        <Button bg={"primary.0"} fullWidth>
          Register
        </Button>
        <Text ta={"center"} fz={14}>
          Have an account?{" "}
          <UnstyledButton onClick={handleClickLoginNow}>
            Login now!
          </UnstyledButton>
        </Text>
      </Stack>
    </Modal>
  );
};

export default PopupRegister;
