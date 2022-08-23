import Image from "next/image";
import { TwitterTweetEmbed } from "react-twitter-embed";

type Props = {
  id: string;
  postPhotoUrl: string;
  content: string;
  favoriteCount: number;
  publisherPhotoUrl: string;
  date: string;
};

export const PostShow = (props: Props) => {
  const { content, date, favoriteCount, postPhotoUrl, publisherPhotoUrl } =
    props;
  return (
    <div className="max-w-full bg-white rounded-lg shadow-md sm:max-w-3xl">
      <div className="py-4">
        <div className="relative mx-auto w-5/6 h-96">
          <Image
            src={postPhotoUrl}
            layout="fill"
            objectFit="contain"
            alt="post"
          />
        </div>
        <div className="relative my-4 mx-auto w-5/6">
          <div className="font-semibold tracking-tight whitespace-pre-line line-clamp-6">
            {content}
          </div>
          <div className="">
            <div className="flex items-center">
              <div className="w-12">
                <Image
                  src={publisherPhotoUrl}
                  width={30}
                  height={30}
                  layout="responsive"
                  alt="publisher"
                  className="rounded-full"
                />
              </div>
              <div className="pl-2 text-sm font-medium text-slate-600">
                {date}
              </div>
              <div className="pl-2 text-sm font-medium text-slate-600">
                ♡{favoriteCount}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <TwitterTweetEmbed tweetId={"1554786010617479169"} />
      </div>
    </div>
  );
};
