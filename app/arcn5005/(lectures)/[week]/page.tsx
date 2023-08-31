import { ReactElement } from "react";
import PageContent from "./PageContent";

interface Props {
  params: { week: string };
}

export default function Page({ params }): ReactElement<Props> {
  return (
    <section className=" flex flex-col items-center justify-center grow gap-8 mdx max-w-[80%] max-h-[580px]">
      <PageContent week={params.week} />
    </section>
  );
}
