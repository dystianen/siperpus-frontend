import { openedPopupLogin, openedPopupRegister } from "@/config/GlobalState";
import { usePostLoginMutation } from "@/redux/slice/auth.api";
import {
  Button,
  Modal,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useSetAtom } from "jotai";
import { LuLock, LuUser2 } from "react-icons/lu";
import * as y from "yup";
import { useForm, yupResolver } from "@mantine/form";
import { toast } from "react-toastify";
import { useLocalStorage } from "@mantine/hooks";

type PopupLoginTypes = {
  opened: boolean;
  close: () => void;
};

const schemaValidation = y.object().shape({
  email: y.string().required("Email wajib diisi!"),
  password: y.string().required("Password wajib diisi!"),
});

const PopupLogin = ({ opened, close }: PopupLoginTypes) => {
  const [_, setToken] = useLocalStorage({
    key: "token",
    getInitialValueInEffect: false,
  });

  const { getInputProps, onSubmit } = useForm({
    validate: yupResolver(schemaValidation),
    initialValues: {
      email: "",
      password: "",
    },
  });
  const setOpenPopupLogin = useSetAtom(openedPopupLogin);
  const setOpenPopupRegister = useSetAtom(openedPopupRegister);
  const handleClickRegisterNow = () => {
    setOpenPopupLogin(false);
    setOpenPopupRegister(true);
  };

  const [submitLogin] = usePostLoginMutation();

  const handleSubmit = onSubmit((values) => {
    submitLogin(values)
      .unwrap()
      .then((res) => {
        toast("Login successfully!");
        setOpenPopupLogin(false);
        setToken(res.token);
      });
  });

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <Text fw={"bold"} fz={24}>
          Sign In, Here!
        </Text>
      }
      centered
    >
      <Stack>
        <TextInput
          type="email"
          label="Email"
          placeholder="email"
          leftSection={<LuUser2 />}
          {...getInputProps("email")}
        />
        <TextInput
          label="Password"
          type="password"
          placeholder="password"
          leftSection={<LuLock />}
          {...getInputProps("password")}
        />

        <Button bg={"primary.0"} fullWidth onClick={() => handleSubmit()}>
          Login
        </Button>
        <Text ta={"center"} fz={14}>
          Don&#39;t have an account yet?{" "}
          <UnstyledButton onClick={handleClickRegisterNow}>
            Register now!
          </UnstyledButton>
        </Text>
      </Stack>
    </Modal>
  );
};

export default PopupLogin;
