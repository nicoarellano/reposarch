import ListWithIcon from "../../components/Common/ListWithIcon";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { Resources } from "../../types/types";

const toc: Resources = [
  {
    title: "Territory Acknowledgement",
    url: "https://carleton.ca/indigenous/policies-procedures/algonquin-territory-acknowledgment/",
  },
  {
    title: "Course Overview",
    url: "",
  },
  {
    title: "Understanding the course portal",
    url: "",
  },
  {
    title: "Assignments",
    url: "",
  },
  {
    title: "Evaluations",
    url: "",
  },
  {
    title: "Final Assignment",
    url: "",
  },
];

export default function Toc() {
  return (
    <ListWithIcon
      list={toc}
      subheader="Table of Content"
      icon={<SlideshowIcon />}
    />
  );
}
