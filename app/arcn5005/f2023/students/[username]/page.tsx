import { FC } from "react";

interface Props {
  params: { username: string };
}

const page: FC<Props> = ({ params }) => {
  return (
    <div>
      <h1>Other Names Are: {params.username}</h1>
    </div>
  );
};

export default page;
