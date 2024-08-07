import SimpleAccordion from "@/components/Common/SimpleAccordion";

export default function ClosedBim() {
  const closedBimList = [
    {
      title: "Specialized software",
      description:
        "Every user will need to have access to the software to participate → The software that we have been using are AEC specific with a high learning curve",
    },
    {
      title: "Price",
      description:
        "Licenses are expensive and cannot be afforded by most people. That makes it hard to collaborate,",
    },
    {
      title: "Complexity",
      description:
        "The tools are very complex:  → The software we use gets larger and heavier with each release. Often, more tools are added, whether you want them or not. ",
    },
    {
      title: "Not customizable",
      description:
        "Tools do not always meet our current needs and there is nothing we can do about it → They are not very customizable. They usually come as-is and you cannot improve them.  → You just have to wait until the next release and hope it includes the improvements that you need. ",
    },
    {
      title: "Not interoperable",
      description:
        "Proprietary formats are not great for interoperability either:  → which makes it hard to collaborate with non-AEC professionals.  → And even within the AEC industry, we spend a lot of time and energy converting files from one format to another.",
    },
    {
      title: "Data loss",
      description:
        "Finally, for long term projects lots of time is wasted upgrading models to the latest software version.  → Upgrading processes are also black boxes, so there is data loss that we cannot control.",
    },
  ];
  return (
    <div className=" overflow-y-auto px-8">
      <h2>Closed-BIM 📦</h2>
      <h4>{`When we use proprietary formats, we are without doubt trapped in a black box for the following reasons:`}</h4>
      <br />
      <SimpleAccordion list={closedBimList} />
    </div>
  );
}
