import SimpleAccordion from "../../../../components/Common/SimpleAccordion";

export default function Freedoms() {
  const osiList = [
    {
      title: "Freedom 0.",
      description:
        "The freedom to run the program as you wish, for any purpose.",
    },
    {
      title: "Freedom 1.",
      description:
        "The freedom to study how the program works, and change it so it does your computing as you wish (freedom 1). Access to the source code is a precondition for this.",
    },
    {
      title: "Freedom 2.",
      description:
        "The freedom to redistribute copies so you can help others (freedom 2).",
    },
    {
      title: "Freedom 3.",
      description:
        "The freedom to distribute copies of your modified versions to others (freedom 3). By doing this you can give the whole community a chance to benefit from your changes. Access to the source code is a precondition for this.",
    },
  ];
  return (
    <div className=" overflow-y-auto px-8">
      <h2>The four essential freedoms</h2>
      <h5>
        A program is free software if the program’s users have the four
        essential freedoms:
      </h5>
      <br />
      <SimpleAccordion list={osiList} />
    </div>
  );
}
