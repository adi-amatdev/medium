import { useState } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const RichTextEditor = ({ value, onChange, placeholder = 'Start writing...' }: RichTextEditorProps) => {
  const [isFocused, setIsFocused] = useState(false);
  
  // Remove auto-resize effect since we're using fixed height with scrollbar

  return (
    <div className={`relative border-0 transition-all h-[500px] ${isFocused ? 'ring-2 ring-gray-200 rounded-lg' : ''}`}>
      <textarea
        id="rich-text-editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="p-4 w-full h-[500px] text-lg leading-relaxed border-0 focus:outline-none resize-none bg-transparent font-serif overflow-y-auto"
      />
    </div>
  );
};

export default RichTextEditor;