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
      <div className=" bg-slate-200 rounded-lg shadow-md">
        <div className="flex h-60">
          <div className="pl-6 w-96 h-48">
            <Image
              src={postPhotoUrl}
              width={900}
              height={600}
              objectFit="contain"
              alt="post"
            />
          </div>
          <div className="m-4">
            <div className="">{content}</div>
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

              <div className="pl-2 text-sm font-semibold">{date}</div>
              <div className="pl-2 text-sm font-semibold">{favoriteCount}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
