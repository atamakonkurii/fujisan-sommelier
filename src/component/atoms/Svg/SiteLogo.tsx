import type { FC } from "react";

type Props = {
  width?: number;
  height?: number;
};

export const SiteLogo: FC<Props> = ({ height = 164, width = 283 }) => {
  return (
    <div className="rotate-12">
      <svg
        width={width}
        height={height}
        viewBox="0 0 244 372"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.8803 3C-14.9586 108.057 1.03742 218.352 122 256C242.963 218.352 258.959 108.057 226.12 3H17.8803Z"
          fill="white"
        />
        <path
          d="M122 256C1.03742 218.352 -14.9586 108.057 17.8803 3H226.12C258.959 108.057 242.963 218.352 122 256ZM122 256V369M56.5 369H186.5"
          stroke="black"
          strokeWidth="6"
        />
        <path
          d="M22.5 173C34.2121 157.65 62.7399 142.82 87.3372 84.583C87.0735 84.1303 86.8114 83.6496 86.5516 83.1388C86.2059 82.6789 85.9009 82.2387 86 82C86.1825 82.3954 86.3665 82.7748 86.5516 83.1388C86.9749 83.7018 87.4591 84.2944 87.3372 84.583C89.9742 89.1102 92.7694 90.8428 94.9928 92C97.5969 93.3553 103.049 81.8848 106.101 82C109.154 82.1151 113.5 92 115.094 92C116.688 92 121.5 82 124 82C126.5 82 130.833 91.8887 133.609 92C136.385 92.1112 138.587 81 141.543 82C144.5 83 145.5 89 149.478 92C153.457 95 159 82 159 82C181.578 140.406 186.815 136.415 221.5 172.5C201.598 211.87 176.726 233.552 121 254C64.1019 230.872 39.558 209.452 22.5 173Z"
          fill="url(#paint0_linear_502_218)"
        />
        <path
          d="M121.5 254C195.604 224.063 219.649 196.146 235 131C191.257 143.762 166.267 142.646 121.25 132.75C75.2654 122.972 52.3056 122.508 9.5 134C25.4759 200.116 54.7182 228.493 121.5 254Z"
          fill="url(#paint1_linear_502_218)"
          fillOpacity="0.5"
        />
        <path
          d="M19 173C53.8391 137.968 82.5408 117.286 92.6564 51H123M226 173C191.161 137.968 162.459 117.286 152.344 51H122M86 82C89 88.5 92.3886 90.6447 94.9928 92C97.5969 93.3553 103.049 81.8848 106.101 82C109.154 82.1152 113.5 92 115.094 92C116.688 92 121.5 82 124 82C126.5 82 130.833 91.8887 133.609 92C136.385 92.1112 138.587 81 141.543 82C144.5 83 145.5 89 149.478 92C153.457 95 159 82 159 82"
          stroke="black"
          strokeWidth="6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_502_218"
            x1="122.25"
            y1="81.9363"
            x2="122.25"
            y2="254"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A3E3FF" />
            <stop offset="1" stopColor="#1881FD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_502_218"
            x1="121.25"
            y1="125.635"
            x2="121.25"
            y2="254"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6FF8A" />
            <stop offset="1" stopColor="#FF5E5E" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
