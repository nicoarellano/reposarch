'use client';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function NestedTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const params = useParams<{ term: string }>();
  const { term } = params;

  const termName = term.replace('f', 'Fall ');
  const isMobile = useMediaQuery('(max-width: 600px)');

  const headerTitle = isMobile
    ? termName
    : `Arcn 5005 - ${termName} - Students`;

  return (
    <main className="flex flex-col w-fit h-fit justify-between">
      <nav className="top-0 flex flex-row w-full h-24 ">
        <Header title={headerTitle} />
      </nav>
      <section className="flex justify-center grow">{children}</section>
    </main>
  );
}
