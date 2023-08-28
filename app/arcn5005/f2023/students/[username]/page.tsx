import { FC } from "react";
import ListWithIcon from "../../../../../components/Common/ListWithIcon";
import { Assignments } from "../../../assignments";
import LinkIcon from "@mui/icons-material/InsertLinkRounded";

interface Props {
  params: { username: string };
}

const page: FC<Props> = ({ params }) => {
  return (
    <section className="flex w-screen items-center justify-center w-1/2 flex-col gap-8">
      <ListWithIcon
        list={Assignments}
        subheader="Assignments"
        icon={<LinkIcon />}
      />
    </section>
  );
};

export default page;
