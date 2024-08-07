import SimpleAccordion from "@/components/Common/SimpleAccordion";

export default function OsiCriteria() {
  const osiList = [
    {
      title: "1. Free Redistribution",
      description:
        "The license shall not restrict any party from selling or giving away the software as a component of an aggregate software distribution containing programs from several different sources. The license shall not require a royalty or other fee for such sale.",
    },
    {
      title: "2. Source Code",
      description:
        "The program must include source code, and must allow distribution in source code as well as compiled form. Where some form of a product is not distributed with source code, there must be a well-publicized means of obtaining the source code for no more than a reasonable reproduction cost, preferably downloading via the Internet without charge. The source code must be the preferred form in which a programmer would modify the program. Deliberately obfuscated source code is not allowed. Intermediate forms such as the output of a preprocessor or translator are not allowed.",
    },
    {
      title: "3. Derived Works",
      description:
        "The license must allow modifications and derived works, and must allow them to be distributed under the same terms as the license of the original software.",
    },
    {
      title: "4. Integrity of The Author’s Source Code",
      description:
        "The license may restrict source-code from being distributed in modified form only if the license allows the distribution of “patch files” with the source code for the purpose of modifying the program at build time. The license must explicitly permit distribution of software built from modified source code. The license may require derived works to carry a different name or version number from the original software.",
    },
    {
      title: "5. No Discrimination Against Persons or Groups",
      description:
        "The license must not discriminate against any person or group of persons.",
    },
    {
      title: "6. No Discrimination Against Fields of Endeavor",
      description:
        "The license must not restrict anyone from making use of the program in a specific field of endeavor. For example, it may not restrict the program from being used in a business, or from being used for genetic research.",
    },
    {
      title: "7. Distribution of License",
      description:
        "The rights attached to the program must apply to all to whom the program is redistributed without the need for execution of an additional license by those parties.",
    },
    {
      title: "8. License Must Not Be Specific to a Product",
      description:
        "The rights attached to the program must not depend on the program’s being part of a particular software distribution. If the program is extracted from that distribution and used or distributed within the terms of the program’s license, all parties to whom the program is redistributed should have the same rights as those that are granted in conjunction with the original software distribution.",
    },
    {
      title: "9. License Must Not Restrict Other Software",
      description:
        "The license must not place restrictions on other software that is distributed along with the licensed software. For example, the license must not insist that all other programs distributed on the same medium must be open-source software.",
    },
    {
      title: "10. License Must Be Technology-Neutral",
      description:
        "No provision of the license may be predicated on any individual technology or style of interface.",
    },
  ];
  return (
    <div className=" overflow-y-auto px-8">
      <SimpleAccordion list={osiList} />
    </div>
  );
}
