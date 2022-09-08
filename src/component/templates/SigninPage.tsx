/* eslint-disable arrow-body-style */
import { Box, Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useAuth } from "src/context/AuthContext";

export const SigninPage: FC = () => {
  const router = useRouter();
  const { login, logout } = useAuth();

  const handleLogin = async (values: any) => {
    try {
      await login(values.email, values.password);
      showNotification({
        title: "Sign in Success",
        message: "ログインに成功しました👍",
      });
      router.push("/");
    } catch (err) {
      showNotification({
        title: "Sign in Failed",
        message: "ログインに失敗しました😢",
        color: "red",
      });
    }
  };

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => {
        return /^\S+@\S+$/.test(value) ? null : "Invalid email";
      },
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          handleLogin(values);
        })}
      >
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <PasswordInput
          withAsterisk
          label="Password"
          placeholder=""
          {...form.getInputProps("password")}
        />

        <Group position="right" mt="md">
          <Button type="submit">ログイン</Button>
        </Group>

        <div>
          <Button
            onClick={() => {
              logout();
              showNotification({
                title: "Sign out Success",
                message: "ログアウトしました💨",
              });
              router.push("/");
            }}
          >
            ログアウト
          </Button>
        </div>
      </form>
    </Box>
  );
};
