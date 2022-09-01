/* eslint-disable arrow-body-style */
import { Box, Button, Group, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useAuth } from "src/context/AuthContext";

export const SigninPage: FC = () => {
  const router = useRouter();
  const { login, logout, user } = useAuth();

  const handleLogin = async (values: any) => {
    console.warn(user);
    try {
      await login(values.email, values.password);
      router.push("/");
    } catch (err) {
      console.warn(err);
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
