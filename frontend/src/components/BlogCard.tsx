interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}

const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) => {
  return (
    <div className="border-b-1 border-b-slate-300">
      <div>
        {authorName} . {publishedDate}
      </div>
      <div>
        {title}
      </div>
      <div>
        {content.slice(0, 100) + "..."}
      </div>
      <div>
        {`${Math.ceil(content.length/100)} minute(s) read`}
      </div>
    </div>
  )
}

export default BlogCard
