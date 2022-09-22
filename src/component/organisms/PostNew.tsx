import {
  Button,
  Group,
  Switch,
  Text,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import type { DropzoneProps, FileWithPath } from "@mantine/dropzone";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useForm } from "@mantine/form";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons";
import Image from "next/image";
import router from "next/router";
import { useState } from "react";

const handleCreatePost = async (values: any) => {
  console.warn(values);
  const res = await fetch("/api/posts/create", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const status = await res.status;

  if (status === 200) {
    router.push("/");
  } else {
    alert("エラー");
  }
};

const handleUploadImage = async (files: FileWithPath[]) => {
  console.warn(files[0].path);
  const formData = new FormData();
  formData.append("file", files[0]);
  const res = await fetch("/api/image/upload", {
    method: "POST",
    body: formData,
  });
  const status = await res.status;

  if (status === 200) {
    return res;
  } else {
    alert("エラー");
  }
};

export const PostNew = (props: Partial<DropzoneProps>) => {
  const theme = useMantineTheme();
  const [imageUrl, setImageUrl] = useState<string>("");

  const form = useForm({
    initialValues: {
      content: "",
      published: false,
      photoUrl: "",
    },
  });

  return (
    <div className="max-w-full sm:max-w-3xl">
      <form
        onSubmit={form.onSubmit((values) => {
          handleCreatePost(values);
        })}
      >
        <div className="flex justify-end items-center mb-2">
          <Switch
            onLabel="ON"
            offLabel="OFF"
            {...form.getInputProps("published")}
          />
          <div className="ml-1 text-slate-500">公開する</div>
          <Button type="submit" className="ml-4">
            保存する
          </Button>
        </div>
        <Dropzone
          onDrop={async (files) => {
            console.warn("accepted files", files);
            const res = await handleUploadImage(files);
            if (res) {
              const resPhotoUrl = await res.json();
              setImageUrl(resPhotoUrl.fileUrl);
              form.setFieldValue("photoUrl", resPhotoUrl.fileUrl);
            }
          }}
          onReject={(files) => {
            return console.warn("rejected files", files);
          }}
          maxSize={5 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
          {...props}
        >
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              <IconUpload
                size={50}
                stroke={1.5}
                color={
                  theme.colors[theme.primaryColor][
                    theme.colorScheme === "dark" ? 4 : 6
                  ]
                }
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                size={50}
                stroke={1.5}
                color={theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto size={50} stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drug and Drop or Touch
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                1枚のみアップロードできます。
              </Text>
            </div>
          </Group>
        </Dropzone>
        {imageUrl ? (
          <Image
            src={imageUrl}
            width={30}
            height={30}
            layout="responsive"
            alt="publisher"
            className="rounded-full"
          />
        ) : (
          <></>
        )}
        <div className="mt-4"></div>
        <Textarea
          placeholder="Your comment"
          label="ソムリエコメント"
          withAsterisk
          autosize
          minRows={10}
          maxRows={15}
          {...form.getInputProps("content")}
        />
      </form>
    </div>
  );
};
