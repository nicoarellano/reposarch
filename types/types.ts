import { Dayjs } from "dayjs";
// Interfaces
export interface Identified {
  _id?: string; //Mongo db id
  id: string;
  name?: string;
}

export interface Slide {
  title: string;
  id: string;
  url?: string;
  content?: JSX.Element;
  notes?: string;
  date?: Dayjs;
}

export interface Lecture {
  title: string;
  id: string;
  url?: string;
  content?: JSX.Element;
  notes?: string;
  slides?: Slides;
  date: Dayjs;
}

export type Lectures = Lecture[];

export type Slides = Slide[];
