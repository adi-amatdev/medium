
import { useState } from 'react';
import PublishToolbar from '../components/PublishToolbar';
import RichTextEditor from '../components/RichTextEditor';
import { BACKEND_URL } from '../../config';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Publish = () => {
    const nav = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const isPublishable = title.trim().length > 0 && content.trim().length > 0;

    const handlePublish = async () => {
      try {
        const response = await axios.post(`${BACKEND_URL}/blog`,{
          title: title,
          content: content
        },{
          headers:{
            Authorization: `Bearer ${localStorage.getItem("jwt")}`
          }
        });
        if(response.status === 200){
          nav(`/blog/${response.data.id}`);
        }else{
          alert("Failed to publish the blog. Please try again.");        }
      } catch (error) {
        alert("An error occurred while publishing the blog. Please try again.");
      }
    };

    const saveDraft = async () => {
        
    };

  return (
    <div className="min-h-screen bg-white">
      <PublishToolbar saveDraft={saveDraft} onPublish={handlePublish} isPublishable={isPublishable} />

      <div className="max-w-4xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full py-3 text-3xl md:text-4xl font-bold border-b border-gray-200 focus:outline-none focus:border-gray-400 transition-all bg-transparent mb-8"
        />
        
        <RichTextEditor
          value={content}
          onChange={setContent}
          placeholder="Tell your story..."
        />
      </div>
    </div>
  );
};

export default Publish;