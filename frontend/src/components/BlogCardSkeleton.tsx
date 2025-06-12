const BlogCardSkeleton = () => {
  return (
    <div className="m-2">
      <div className="p-4 border-b border-slate-300 w-full max-w-2xl mx-auto rounded-lg bg-white">
        <div className="flex flex-wrap items-center">
          <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="pl-2 w-24 h-4 bg-gray-200 animate-pulse rounded"></div>
          <div className="pl-1 mb-2 items-center">
            .
          </div>
          <div className="pl-1 w-20 h-4 bg-gray-200 animate-pulse rounded"></div>
        </div>
        <div className="pt-2">
          <div className="w-3/4 h-8 bg-gray-200 animate-pulse rounded mb-2"></div>
          <div className="pt-2">
            <div className="w-full h-4 bg-gray-200 animate-pulse rounded mb-1"></div>
            <div className="w-full h-4 bg-gray-200 animate-pulse rounded mb-1"></div>
            <div className="w-2/3 h-4 bg-gray-200 animate-pulse rounded"></div>
          </div>
          <div className="pt-2 mb-2 w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;