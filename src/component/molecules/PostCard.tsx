import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  postPhotoUrl: string;
  content: string;
  favoriteCount: number;
  publisherPhotoUrl: string;
  date: string;
};

export const PostCard = (props: Props) => {
  const { content, date, favoriteCount, id, postPhotoUrl, publisherPhotoUrl } =
    props;
  return (
    <Link href={`/post/${id}`}>
      <div className="max-w-3xl bg-white rounded-lg shadow-md">
        <div className="flex ml-4">
          <div className="relative w-96 h-72">
            <Image
              src={postPhotoUrl}
              layout="fill"
              objectFit="contain"
              alt="post"
            />
          </div>
          <div className="relative my-8 mx-4 w-96">
            <div className="font-semibold tracking-tight whitespace-pre-line line-clamp-6">
              {content}
            </div>
            <div className="absolute bottom-0 left-0">
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
      </div>
    </Link>
  );
};
