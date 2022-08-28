type Props = {
  typeOfNews: string;
};

const newsTypeColor = (typeOfNews: string) => {
  let bgColor, text;
  switch (typeOfNews) {
    case "RELEASE":
      bgColor = "bg-amber-600";
      text = "リリース";
      break;
    case "FAILURE":
      bgColor = "bg-red-600";
      text = "障害";
      break;
    case "NOTICE":
      bgColor = "bg-blue-500";
      text = "お知らせ";
      break;
    default:
      bgColor = "bg-neutral-700";
      text = typeOfNews;
      break;
  }

  return { bgColor, text };
};

export const NewsType = (props: Props) => {
  const { typeOfNews } = props;
  const { bgColor, text } = newsTypeColor(typeOfNews);

  return (
    <div className={`text-white ${bgColor} rounded w-16 flex`}>
      <p className="py-0.5 mx-auto text-xs font-semibold">{text}</p>
    </div>
  );
};
