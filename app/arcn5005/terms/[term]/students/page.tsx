'use client';

import { classListf2023 } from './(classListF2023)/classList';
import { classListf2024 } from './(classListF2024)/classList';
import StudentsNestedList from '@/components/Common/StudentsNestedList';
import SimpleButton from '@/components/Common/SimpleButton';
import { useParams } from 'next/navigation';
import StudentsList from '@/components/Common/StudentsList';

export default function WeekToc() {
  const params = useParams();
  const { term } = params;

  const classList = term === 'f2024' ? classListf2024 : classListf2023;
  const previousTerm = term === 'f2024' ? 'f2023' : 'f2024';

  return (
    <div className=" flex flex-col items-center justify-center grow gap-8 mdx">
      <StudentsList students={classList} />
      <SimpleButton
        href={`/arcn5005/terms/${previousTerm}/students`}
        title={`Assignments from ${previousTerm}`}
      />
    </div>
  );
}
