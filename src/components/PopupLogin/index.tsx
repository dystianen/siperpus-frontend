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
        <Text fw={"bold"} fz={24}>
          Sign In, Here!
        </Text>
      }
      centered
      styles={{
        header: {
          backgroundColor: colors.neutral[3],
        },
        content: {
          backgroundColor: colors.neutral[3],
        },
      }}
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

        <Button bg={colors.primary[0]} fullWidth onClick={() => handleSubmit()}>
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
    </Modal>
  );
};

export default PopupLogin;
