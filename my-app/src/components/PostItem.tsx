import React from "react";

interface PostItemProps {
  title: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
}

const PostItem: React.FC<PostItemProps> = ({
  title,
  date,
  content,
  likes,
  comments,
}) => {
  return (
    <article className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
      <header className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-stone-900">{title}</h3>
        <time className="text-sm text-neutral-500">{date}</time>
      </header>
      <p className="mb-4 text-base text-stone-800">{content}</p>
      <footer className="flex items-center text-sm text-neutral-500">
        <div className="flex items-center mr-4">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="currentColor"
            />
          </svg>
          {likes} likes
        </div>
        <div className="flex items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <path
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"
              fill="currentColor"
            />
          </svg>
          {comments} comments
        </div>
      </footer>
    </article>
  );
};

export default PostItem;
