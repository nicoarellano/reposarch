import SimpleAccordion from "../../../../components/Common/SimpleAccordion";

export default function Tags() {
  const tagsList = [
    {
      title: "Head tags:",
      description: "<title>,<style>,<script>,<link>,<meta> and <base>.",
    },

    {
      title: "Text-formatting tags:",
      description:
        "<h>,<b>,<strong>,<small>,<pre>,<i>,<em>,<sub>,<sup>,<ins>,<dfn>,<del>,<div> and <span>.",
    },

    { title: "Link tags:", description: "<a>, <base>." },

    { title: "List tags:", description: "<ul>, <ol>, <li>, <dl>, <dd>" },

    {
      title: "Table tags:",
      description: "table> ,<tr> , <td>, <th>, <thead>, <tbody>, <tfoot>.",
    },

    {
      title: "Form tags:",
      description:
        "<form>, <input>, <select>, <option>, <button>, <label>, <fieldset>, <textarea>.",
    },

    { title: "Scripting tags:", description: "<script>, <noscript>" },

    {
      title: "Image and Object tags:",
      description: "<img>, <figure>, <figcaption>, <area>, <map>, <object>.",
    },
  ];
  return (
    <div className=" overflow-y-auto px-8">
      <h2>HTML Tags</h2>
      <h4>{`HTML Element: <tagName attributes> content </tagName>`}</h4>
      <br />
      <SimpleAccordion list={tagsList} />
    </div>
  );
}
