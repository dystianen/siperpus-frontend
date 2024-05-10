import { openedPopupLogin, openedPopupRegister } from "@/config/GlobalState";
import { usePostRegisterMutation } from "@/redux/slice/auth.api";
import {
  Button,
  Modal,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { useSetAtom } from "jotai";
import React from "react";
import { LuLock, LuMail, LuUser2 } from "react-icons/lu";
import { SiGooglemaps } from "react-icons/si";
import { toast } from "react-toastify";
import * as y from "yup";

type PopupLoginTypes = {
  opened: boolean;
  close: () => void;
};

const schemaValidation = y.object().shape({
  user_name: y.string().required("user_name is required!"),
  email: y.string().required("Email is required!"),
  password: y.string().required("Password is required!"),
  address: y.string().required("Address is required!"),
});

const PopupRegister = ({ opened, close }: PopupLoginTypes) => {
  const setOpenPopupLogin = useSetAtom(openedPopupLogin);
  const setOpenPopupRegister = useSetAtom(openedPopupRegister);
  const [submitRegister] = usePostRegisterMutation();

  const { getInputProps, onSubmit } = useForm({
    validate: yupResolver(schemaValidation),
    initialValues: {
      user_name: "",
      email: "",
      password: "",
      address: "",
    },
  });

  const handleClickLoginNow = () => {
    setOpenPopupRegister(false);
    setOpenPopupLogin(true);
  };

  const handleSubmit = onSubmit((values) => {
    submitRegister(values)
      .unwrap()
      .then(() => {
        toast("Register successfully!");
        setOpenPopupRegister(false);
        setOpenPopupLogin(true);
      });
  });

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
          {...getInputProps("user_name")}
        />
        <TextInput
          label="Email"
          placeholder="email"
          type="email"
          leftSection={<LuMail />}
          {...getInputProps("email")}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="password"
          leftSection={<LuLock />}
          {...getInputProps("password")}
        />
        <TextInput
          label="Address"
          placeholder="address"
          leftSection={<SiGooglemaps />}
          {...getInputProps("address")}
        />

        <Button bg={"primary.0"} fullWidth onClick={() => handleSubmit()}>
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
