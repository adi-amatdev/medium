import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

interface InputBoxProps {
  label: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  isPassword?: boolean;
}

const InputBox = ({label, placeholder, onChange, type, isPassword}:InputBoxProps) => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  
  const inputType = isPassword ? (passwordVisible ? "text" : "password") : (type || "text");
  
  return (
       <div className="mb-5 font-serif">
            <label className="block mb-2 text-sm font-semibold text-gray-900">{label}</label>
            {isPassword ? (
              <div className="relative">
                <input 
                  onChange={onChange} 
                  type={inputType} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-0.5" 
                  placeholder={placeholder} 
                  required 
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                  {passwordVisible ? 
                    <EyeIcon onClick={() => setPasswordVisible(false)} /> : 
                    <EyeOffIcon onClick={() => setPasswordVisible(true)} />
                  }
                </div>
              </div>
            ) : (
              <input 
                onChange={onChange} 
                type={label.toLowerCase() === 'email'?'email':inputType} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-0.5" 
                placeholder={placeholder} 
                required 
              />
            )}
        </div>
  )
}

export default InputBox