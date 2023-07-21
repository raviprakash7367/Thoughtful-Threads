import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to Thoughtful Threads</h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
        Welcome to our comprehensive collection of articles and tutorials, where you'll find valuable resources on web development, software engineering, and programming languages. Whether you're a beginner or an experienced professional, our content covers everything from HTML, CSS, and JavaScript basics to advanced topics like front-end frameworks, back-end technologies, and responsive design. Delve into software engineering principles, agile methodologies, DevOps practices, and version control with Git. Additionally, explore various programming languages, including Python, Java, C++, Go, Rust, and Kotlin, to enhance your coding skills and apply them in real-world scenarios.
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

<div className='p-20  '>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-10 flex flex-wrap gap-10'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}