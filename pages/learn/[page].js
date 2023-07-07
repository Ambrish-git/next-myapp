import { useRouter } from 'next/router'
import Link from 'next/link';
import topics from '../api/topics';
export default function Page() {
  const router = useRouter();
  console.log(router.query);
  const { page } = router.query;
  const topic = topics.find((topic) => topic.id === page);

  return (
    <>
      <Link href="/">Back</Link>
      <h1>Learn {topic.id}</h1>
    </>
  );
}
