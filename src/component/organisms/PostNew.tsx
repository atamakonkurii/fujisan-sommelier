import { Switch } from "@mantine/core";

export const PostNew = () => {
  return (
    <div className="max-w-full sm:max-w-3xl">
      <Switch onLabel="ON" offLabel="OFF" />
      <div className="h-52 bg-slate-300">画像</div>
      <div className="mt-4"></div>
      <div className="h-96 bg-slate-100 rounded-xl">
        ソムリエコメントを書きましょう
      </div>
    </div>
  );
};
