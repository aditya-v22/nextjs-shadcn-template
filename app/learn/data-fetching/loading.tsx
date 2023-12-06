import { PostSkeleton } from './post';

export default function Loading() {
  return new Array(12)
    .fill(null)
    .map((_, i) => <PostSkeleton key={i.toString()} />);
}
