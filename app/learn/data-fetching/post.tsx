import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Skeleton from '@/components/ui/skeleton';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function PostSkeleton() {
  console.log('rendering skeleton');
  return (
    <Card>
      <CardHeader>
        <CardTitle className='capitalize'>
          <Skeleton className='h-[72px] w-[150px] rounded-md' />
        </CardTitle>
        <CardDescription>
          <Skeleton className='h-[20px] w-[300px] rounded-md' />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className='h-[10px] w-[300px] rounded-md' />
        <Skeleton className='mt-3 h-[10px] w-[250px] rounded-md' />
        <Skeleton className='mt-3 h-[10px] w-[200px] rounded-md' />
      </CardContent>
      <CardFooter className='border-t px-6 py-4'>
        <Skeleton className='h-[73px] w-[100px] rounded-md' />
      </CardFooter>
    </Card>
  );
}

export default function PostCard({ body, id, title, userId }: Post) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='capitalize'>{title}</CardTitle>
        <CardDescription>Posted by user {userId}</CardDescription>
      </CardHeader>
      <CardContent>{body}</CardContent>
      <CardFooter className='border-t px-6 py-4'>
        <Button variant='ghost' title='Like this post'>
          <Heart color='red' />
        </Button>
      </CardFooter>
    </Card>
  );
}
