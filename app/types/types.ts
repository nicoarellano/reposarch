import { Dayjs } from 'dayjs';
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
export type Slides = Slide[];

export interface Resource {
  title: string;
  id?: string;
  url?: string;
  author?: string;
  chicago?: string;
}
export type Resources = Resource[];

export interface Content {
  title?: string;
  url?: string;
  element?: JSX.Element;
  notes?: string;
}

export type Toc = Content[];

export interface Recording {
  url: string;
  title: string;
  date: Dayjs;
}

export interface Lecture {
  title: string;
  id: string;
  url?: string;
  content?: Content[];
  notes?: string;
  slides?: string[];
  date?: Dayjs;
  toc: Toc;
  recordings?: Recording[];
}

export type Lectures = Lecture[];

type assignments = 'about' | 'three' | 'map' | 'bim' | 'final';

export interface Student {
  id: string;
  username: string;
  lastName: string;
  firstName: string;
  email: string;
  assignments: assignments[];
}

export type Students = Student[];

export type Mode = 'light' | 'dark';
