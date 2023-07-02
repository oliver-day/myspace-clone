export const revalidate = 1200; // not necessary, but makes ISR explicit

interface Post {
  title: string;
  content: string;
  slug: string;
}

export async function generateStaticParams() {
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  const posts: Post[] = await fetch(`${url}/api/content`).then((res) => res.json());

  return posts.map((post) => ({
    params: { slug: post.slug }
  }));
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  // deduped
  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  const posts: Post[] = await fetch(`${url}/api/content`).then((res) => res.json());
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
