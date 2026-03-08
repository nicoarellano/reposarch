import { Lectures } from "../../types/types";

export const chapters: Lectures = [
  {
    title: "Introduction",
    id: "introduction",
    url: "introduction",
    toc: [],
  },
  {
    title: "Chapter 1: Deblackboxing the Digital Toolbox for Architects",
    id: "chapter01",
    url: "chapter01",
    toc: [
      { title: "1.1 The New Toolbox" },
      { title: "1.2 Trapped in the Black Box" },
      {
        title: "1.3 Thinking Outside the Black Box",
        children: [
          {
            title:
              "1.3.1 Open-Source Software and the Common Language of Open Standards",
          },
          { title: "1.3.2 Open-Source Software for AECO" },
          { title: "1.3.3 Open-Source Standards for AECO" },
        ],
      },
    ],
  },
  {
    title: "Chapter 2: Teaching Open-Source Toolmaking for Architects",
    id: "chapter02",
    url: "chapter02",
    toc: [
      { title: "2.1 Digital Tools in Architectural Education" },
      { title: "2.2 The Course" },
      { title: "2.3 Course Portal" },
      { title: "2.4 The Course GitHub Repository" },
      {
        title: "2.5 Lectures",
        children: [
          { title: "2.5.1 Lecture 1: The Art of Computer Graphics" },
          { title: "2.5.2 Lecture 2: Digitalization of the Physical World" },
          { title: "2.5.3 Lecture 3: Drawing with Computers" },
          { title: "2.5.4 Lecture 4: Tools and Processes for AECO" },
          { title: "2.5.5 Lecture 5: Visual Programming and Scripting" },
          { title: "2.5.6 Lecture 6: Internet and the Open-Source Movements" },
          { title: "2.5.7 Lecture 7: Open-Source Software for Architects" },
          { title: "2.5.8 Lecture 8: Open-Source GIS" },
          { title: "2.5.9 Lecture 9: Going Online and Scaling Up" },
        ],
      },
      { title: "2.6 Beyond the Course" },
    ],
  },
  {
    title: "Chapter 3: Developing a BIM/GIS Open-Source Tool",
    id: "chapter03",
    url: "chapter03",
    toc: [
      { title: "3.1 History of the Project" },
      { title: "3.2 What is a Digital Twin?" },
      {
        title: "3.3 The Platform",
        children: [
          { title: "3.3.1 Web-Based" },
          { title: "3.3.2 Based on Open Standards" },
          { title: "3.3.3 Non-Proprietary, Free and Open-Source" },
          { title: "3.3.4 Build with Open Technology" },
          { title: "3.3.5 BIM/GIS Integration" },
          { title: "3.3.6 National and Federated" },
        ],
      },
      {
        title: "3.4 Tech Stack",
        children: [
          { title: "3.4.1 The Languages" },
          { title: "3.4.2 The Tooling" },
          { title: "3.4.3 The Libraries" },
          { title: "3.4.4 BIM and the 3D Graphics" },
          { title: "3.4.5 Point Clouds and Photomeshes" },
          { title: "3.4.6 CAD" },
          { title: "3.4.7 Web-Based GIS" },
          { title: "3.4.8 The Standards" },
          { title: "3.4.9 Backend" },
        ],
      },
      {
        title: "3.5 Features Up to Date",
        children: [
          { title: "3.5.1 Authentication" },
          { title: "3.5.2 Bilingual Interface" },
          { title: "3.5.3 Map Viewer" },
          { title: "3.5.4 Open Data Integration" },
          { title: "3.5.5 User Input" },
          { title: "3.5.6 BIM Viewer" },
          { title: "3.5.7 Point Cloud Viewer" },
        ],
      },
      {
        title: "3.6 Use Cases",
        children: [
          { title: "3.6.1 Development: Downsview Airport Lands" },
          { title: "3.6.2 Environmental Visualization: Wildfires" },
          { title: "3.6.3 Social Impact: Affordable Housing" },
          { title: "3.6.4 Envirocentre" },
          { title: "3.6.5 Federal Asset Management Tool" },
          { title: "3.6.6 Canada’s Digital Twin" },
        ],
      },
      { title: "3.7 Recognition" },
      { title: "3.8 Governance Structure: Not-For-Profit" },
      { title: "3.9 Release" },
      { title: "3.10 Next Steps" },
    ],
  },
  {
    title: "Conclusion",
    id: "conclusions",
    url: "conclusions",
    toc: [{ title: "In Summary" }, { title: "An Open Future" }],
  },
];
