import * as React from "react";
import SimpleAccordion from "../../../../components/Common/SimpleAccordion";

export default function Freedoms() {
  const osiList = [
    {
      title: "Lesson 1",
      description:
        "Every good work of software starts by scratching a developer’s personal itch... ‘‘Necessity is the mother of invention’’ (23)",
    },
    {
      title: "Lesson 2",
      description:
        "Good programmers know what to write. Great ones know what to rewrite (and reuse)... constructive laziness... you get an A not for effort but for results. ",
    },
    {
      title: "Lesson 3",
      description:
        "‘Plan to throw one awa y; you will, anyhow...you often don’t really understand the problem until after the first time you implement a solution. (25)",
    },
    {
      title: "Lesson 4",
      description:
        "If you have the right attitude, interesting problems will find you. (26)",
    },
    {
      title: "Lesson 5",
      description:
        "When you lose interest in a program, your last duty to it is to hand it off to a competent successor.",
    },
    {
      title: "Lesson 6",
      description:
        "Treating your users as co-developers is your least-hassle route to rapid code improvement and effective debugging. (27)",
    },
    {
      title: "Lesson 7",
      description:
        "Release early. Release often. And listen to your customers. (29)",
    },
    {
      title: "Lesson 8",
      description:
        "Given a large enough beta-tester and co-developer base, almost every problem will be characterized quickly and the fix obvious to someone... Linus's Law: Given enough eyeballs, all bugs are shallow. (30)... Brooks’s Law: ‘‘Adding more programmers to a late project makes it later. the complexity and communication costs of a project rise with the square of the number of developers,(34)",
    },
    {
      title: "Lesson 9",
      description:
        "Smart data structures and dumb code works a lot better than the other way around. (37)",
    },
    {
      title: "Lesson 10",
      description:
        "If you treat your beta-testers as if they’re your most valuable resource, they will respond by becoming your most valuable resource. (38)",
    },
    {
      title: "Lesson 11",
      description:
        "The next best thing to having good ideas is recognizing good ideas from your users. Sometimes the latter is better. (40)",
    },
    {
      title: "Lesson 12",
      description:
        "Often, the most striking and innova tive solutions come from realizing that your concept of the problem was wrong. (40)",
    },
    {
      title: "Lesson 13",
      description:
        "Perfection (in design) is achieved not when there is nothing more to add, but rather when there is nothing more to take away. (41)",
    },
    {
      title: "Lesson 14",
      description:
        "Any tool should be useful in the expected way, but a truly great tool lends itself to uses you never expected. (44)",
    },
    {
      title: "Lesson 15",
      description:
        "When writing gateway software of any kind, take pains to disturb the data stream as little as possible— and never throw away information unless the recipient forces you to! (44)",
    },
    {
      title: "Lesson 16",
      description:
        "When your language is nowhere near Turing complete, syntactic sugar can be your friend. (46)",
    },
    {
      title: "Lesson 17",
      description:
        "A security system is only as secure as its secret. Beware of pseudo-secrets. (46)",
    },
    {
      title: "Lesson 18",
      description:
        "To solve an interesting problem, start by finding a problem that is interesting to you. (49)",
    },
    {
      title: "Lesson 19",
      description:
        "Provided the development coordinator has a communications medium at least as good as the Internet, and knows how to lead without coercion, many heads are inevitably better than one. (54)",
    },
  ];
  return (
    <div className="overflow-y-auto">
      <h2>19 good programmers lessons</h2>
      <br />
      <SimpleAccordion list={osiList} />
    </div>
  );
}
