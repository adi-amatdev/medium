import { Link } from 'react-router-dom';

interface PublishToolbarProps {
  saveDraft: () => void;
  onPublish: () => void;
  isPublishable: boolean;
}

const PublishToolbar = ({saveDraft, onPublish, isPublishable }: PublishToolbarProps) => {
  return (
    <div className="border-b border-gray-300 flex justify-between py-4 px-6 sticky top-0 bg-white z-10">
      <Link to="/blogs" className="flex items-center">
        <span className="text-2xl">Medium</span>
      </Link>
      
      <div className="flex items-center gap-4 relative">
        <div>
            <button 
              onClick={saveDraft}
              disabled={true}
              className="px-5 py-2 bg-slate-300 text-black rounded-full hover:bg-slate-400 transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
              save draft
            </button>
        </div>
        <button 
          onClick={onPublish}
          disabled={!isPublishable}
          className="px-5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default PublishToolbar;