import Image from "next/image";
import Link from "next/link";

type Props = {
  id: number;
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
    <Link href={`/posts/${id}`}>
      <div className="max-w-full bg-white rounded-lg shadow-md sm:max-w-3xl">
        <div className="py-4 sm:flex sm:ml-4">
          <div className="relative mx-6 h-72 sm:w-96">
            <Image
              src={postPhotoUrl}
              layout="fill"
              objectFit="contain"
              alt="post"
            />
          </div>
          <div className="relative my-4 mx-6 sm:my-8 sm:mx-4 sm:w-96">
            <div className="font-semibold tracking-tight whitespace-pre-line line-clamp-6">
              {content}
            </div>
            <div className="sm:absolute sm:bottom-0 sm:left-0">
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
