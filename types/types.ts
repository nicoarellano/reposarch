import { Dayjs } from "dayjs";
// Interfaces
export interface Identified {
  _id?: string; //Mongo db id
  id: string;
  name?: string;
}

export interface Slide {
  id: string;
  title: string;
  url: string;
}

// export interface Topic {
//   title: string;
//   src: string;
// }

export interface Class {
  id?: string;
  title: string;
  src: string;
  date: Dayjs;
  topics: Topic[];
}

export type Slides = Slide[];

export type Classes = Class[];

export type Topic = string;

export type Topics = Topic[];
