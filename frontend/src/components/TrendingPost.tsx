import { Link } from 'react-router-dom';
import Avatar from './Avatar';

interface TrendingPostProps {
  number: number;
  author: string;
  title: string;
  date: string;
  readTime: string;
  id?: string;
}

const TrendingPost = ({ number, author, title, date, readTime, id }: TrendingPostProps) => {
  const content = (
    <div className="flex gap-4 group">
      <div className="text-3xl font-bold text-gray-500">{number < 10 ? `0${number}` : number}</div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Avatar name={author} size={6} textSize='md' />
          <span className="text-sm">{author}</span>
        </div>
        <h3 className="font-bold mb-2 group-hover:underline cursor-pointer">
          {title}
        </h3>
        <div className="text-gray-500 text-sm">{date} · {readTime} read</div>
      </div>
    </div>
  );

  return id ? (
    <Link to={`/blog/${id}`}>
      {content}
    </Link>
  ) : (
    content
  );
};

export default TrendingPost;