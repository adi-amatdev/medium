import AppBar from "./AppBar";

const BlogPageSkeleton = () => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="w-full max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6 mt-8">
            <div className="col-span-12 md:col-span-8 p-6 md:p-8 rounded-lg shadow-md bg-white">
              <div className="w-3/4 h-10 bg-gray-200 animate-pulse rounded mb-4"></div>
              <div className="w-40 h-6 bg-gray-200 animate-pulse rounded mb-8"></div>
              <div className="space-y-4">
                <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-3/4 h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-full h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="w-2/3 h-4 bg-gray-200 animate-pulse rounded"></div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 p-4 rounded-lg shadow-md bg-white">
              <div className="w-1/2 h-6 bg-gray-200 animate-pulse rounded mb-4"></div>
              <div className="w-full h-4 bg-gray-200 animate-pulse rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageSkeleton;