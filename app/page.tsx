import Link from 'next/link';
import Box from '../components/Common/Box';

export default function Home() {
  return (
    <main className="flex-col flex justify-center items-center w-full h-full">
      <Link href={'/arcn5005'}>
        <Box />
        <br />
        <div className="flex justify-center items-center">
          <h3>THINK OUTSIDE OF THE BLACK-BOX</h3>
        </div>
      </Link>
    </main>
  );
}
