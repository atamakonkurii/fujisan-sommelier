import type { FC } from "react";
import { Button } from "src/component/Button";
import { PostCard } from "src/component/molecules/PostCard";

export const Index: FC = () => {
  const handleClick = () => {
    window.alert("Hello, World!");
  };

  return (
    <div>
      <h2>Index</h2>
      <Button tag="button" className="p-2" onClick={handleClick}>
        Click me!
      </Button>
      <PostCard
        id={"dummy"}
        postPhotoUrl={"/img/exp_fujisan.png"}
        content={"content"}
        favoriteCount={0}
        publisherPhotoUrl={"/img/exp_fujisan.png"}
        date={"2020/09/09"}
      />
    </div>
  );
};
