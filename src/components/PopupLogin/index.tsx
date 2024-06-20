import { openedPopupLogin, openedPopupRegister } from "@/store/GlobalState";
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
import { setCookie } from "cookies-next";
import colors from "@/config/colors";

type PopupLoginTypes = {
  opened: boolean;
  close: () => void;
};

const schemaValidation = y.object().shape({
  email: y.string().required("Email is required!"),
  password: y.string().required("Password is required!"),
});

const PopupLogin = ({ opened, close }: PopupLoginTypes) => {
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
        setCookie("authToken", res.token, { secure: true });
      });
  });

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <Text fw={"bold"} fz={30}>
          Sign In, Here!
        </Text>
      }
      centered
    >
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextInput
            type="email"
            label="Email"
            placeholder="email"
            size="lg"
            leftSection={<LuUser2 />}
            {...getInputProps("email")}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="password"
            size="lg"
            leftSection={<LuLock />}
            {...getInputProps("password")}
          />

          <Button
            mt="xl"
            fullWidth
            variant="outline"
            color="white"
            size="lg"
            radius="xl"
            type="submit"
          >
            Login
          </Button>
          <Text ta={"center"} fz={14}>
            Don&#39;t have an account yet?{" "}
            <UnstyledButton
              onClick={handleClickRegisterNow}
              style={{ textDecoration: "underline" }}
            >
              Register now!
            </UnstyledButton>
          </Text>
        </Stack>
      </form>
    </Modal>
  );
};

export default PopupLogin;
