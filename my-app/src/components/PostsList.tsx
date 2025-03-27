import React from "react";
import PostItem from "./PostItem";

const posts = [
  {
    title: "Morning Meditation",
    date: "Today, 8:30 AM",
    content:
      "Started my day with a peaceful 20-minute meditation session. Feeling centered and ready for the day ahead.",
    likes: 12,
    comments: 3,
  },
  {
    title: "Scripture Study Insights",
    date: "Yesterday, 7:15 PM",
    content:
      "Today's scripture study was particularly meaningful. I focused on passages about perseverance and found strength in the words.",
    likes: 8,
    comments: 5,
  },
  {
    title: "Temple Visit Reflection",
    date: "Last week",
    content:
      "Visited the temple this weekend and felt an incredible peace. Taking time for spiritual renewal is so important in our busy lives.",
    likes: 24,
    comments: 7,
  },
  {
    title: "Sunday Service Highlights",
    date: "2 weeks ago",
    content:
      "The message at church today about community service really resonated with me. Looking forward to volunteering at the food bank next weekend.",
    likes: 15,
    comments: 4,
  },
  {
    title: "Prayer Journal",
    date: "3 weeks ago",
    content:
      "Started keeping a prayer journal to track my spiritual growth. Already seeing patterns in how my prayers are being answered.",
    likes: 19,
    comments: 6,
  },
  {
    title: "Inspirational Quote",
    date: "Last month",
    content:
      '"Faith is taking the first step even when you don\'t see the whole staircase." - Martin Luther King Jr. This quote has been guiding me lately.',
    likes: 32,
    comments: 8,
  },
];

const PostsList: React.FC = () => {
  return (
    <section className="px-6 py-2 overflow-y-auto h-[calc(100vh-200px)] pb-16">
      <div className="posts-container">
        {posts.map((post, index) => (
          <PostItem
            key={index}
            title={post.title}
            date={post.date}
            content={post.content}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </div>
    </section>
  );
};

export default PostsList;
