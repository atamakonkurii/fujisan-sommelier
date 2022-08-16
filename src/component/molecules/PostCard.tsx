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
      <div className="flex">
        <Image src={`${postPhotoUrl}`} alt="post" />
        <div>
          <div className="">{content}</div>
          <div className="flex">
            <Image src={`${publisherPhotoUrl}`} alt="publisher" />
            <div className="pl-2 text-sm font-semibold">{date}</div>
            <div className="pl-2 text-sm font-semibold">{favoriteCount}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};
