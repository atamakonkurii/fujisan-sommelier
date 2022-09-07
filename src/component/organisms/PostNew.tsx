import {
  Button,
  Group,
  Switch,
  Text,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import type { DropzoneProps } from "@mantine/dropzone";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons";

export const PostNew = (props: Partial<DropzoneProps>) => {
  const theme = useMantineTheme();
  return (
    <div className="max-w-full sm:max-w-3xl">
      <div className="flex justify-end items-center mb-2">
        <Switch onLabel="ON" offLabel="OFF" />
        <div className="ml-1 text-slate-500">公開する</div>
        <Button component="a" className="ml-4">
          保存する
        </Button>
      </div>
      <Dropzone
        onDrop={(files) => {
          return console.warn("accepted files", files);
        }}
        onReject={(files) => {
          return console.warn("rejected files", files);
        }}
        maxSize={3 * 1024 ** 2}
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
      <div className="mt-4"></div>
      <Textarea
        placeholder="Your comment"
        label="ソムリエコメント"
        withAsterisk
        autosize
        minRows={10}
        maxRows={15}
      />
    </div>
  );
};
