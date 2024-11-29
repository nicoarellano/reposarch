'use client';

import NestedParentList from '@/components/Common/LecturesNestedList';
import { arcn5005Lectures } from '../../(lectures)/arcn5005Lectures';

export default function TOC() {
  const visibleLectures = arcn5005Lectures.filter(
    (lecture) => lecture.visibleInToc !== false
  );

  return (
    <div className=" flex items-center justify-center grow">
      <NestedParentList list={visibleLectures} title="Course Schedule (date)" />
    </div>
  );
}
