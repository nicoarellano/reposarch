// Interfaces
export interface Identified {
  _id?: string; //Mongo db id
  id: string;
  name?: string;
}

export interface Slide {
  id: string;
  title: string;
  slide: any;
}

export type Slides = Slide[];
