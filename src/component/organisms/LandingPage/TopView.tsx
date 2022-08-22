import type { FC } from "react";

export const TopView: FC = () => {
  return (
    <div className="text-white bg-gradient-to-r from-slate-400 to-sky-400">
      <div className="pt-10 text-xs text-center sm:text-xl">
        富士山のフリー素材なら
      </div>
      <div className="mt-3 text-3xl font-bold text-center sm:mt-8 sm:text-6xl">
        富士山ソムリエ
      </div>
      <div className="pb-10 pl-32 text-xs text-center sm:pl-52">
        fujisan-smmelier
      </div>
    </div>
  );
};
