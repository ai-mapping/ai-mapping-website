import React from 'react';

type YoutubeIconProps = {
  className?: string;
};

const YoutubeIcon: React.FC<YoutubeIconProps> = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M21.885 7.37c0-.86-.018-1.722-.09-2.58a5.36 5.36 0 00-1.273-3.11 5.36 5.36 0 00-3.11-1.273c-.857-.072-1.72-.09-2.582-.09h-5.66c-.862 0-1.725.018-2.582.09a5.36 5.36 0 00-3.11 1.273 5.36 5.36 0 00-1.272 3.11c-.072.858-.09 1.72-.09 2.58v5.66c0 .861.018 1.724.09 2.582a5.36 5.36 0 001.273 3.11 5.36 5.36 0 003.11 1.272c.857.072 1.72.09 2.581.09h5.66c.862 0 1.725-.018 2.582-.09a5.36 5.36 0 003.11-1.272 5.36 5.36 0 001.273-3.11c.072-.858.09-1.721.09-2.582v-5.66zM15.16 12l-4.5 2.25v-4.5l4.5 2.25z" />
  </svg>
);

export default YoutubeIcon;