import Link from "next/link";
import type { FC } from "react";
import { SiteLogo } from "src/component/atoms/Svg/SiteLogo";

export const StandardHeader: FC = () => {
  return (
    <header className="">
      <div className="flex items-center ml-8 h-14">
        <Link href="/">
          <a>
            <div className="flex">
              <SiteLogo height={30} width={54} />
              <div>富士山ソムリエ</div>
            </div>
          </a>
        </Link>
      </div>
    </header>
  );
};
