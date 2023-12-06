import PostCard, { Post } from './post';

async function getPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default async function DataFetchingPage() {
  const data = await getPosts();

  return data.map((post) => <PostCard key={post.id} {...post} />);
}
