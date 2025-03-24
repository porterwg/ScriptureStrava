import React from 'react';

const PostsPage = () => {
    const posts = [
        { user: "Porter Graham", content: "Had a great time at the ward activity!", avatar: "/img/Jesus.png", image: "/img/waffles.jpg" },
        { user: "Jessica Smith", content: "Looking forward to our next group meeting!", avatar: "/img/familyphoto.jpg", image: "/img/Jesus.png" },
        { user: "Mike Johnson", content: "Does anyone have notes from last Sunday?", avatar: "/img/waffles.jpg", image: "/img/familyphoto.jpg" },
    ];

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Recent Posts</h1>
            {posts.map((post, index) => (
                <div key={index} style={{
                    background: 'white', margin: '10px auto', padding: '20px',
                    maxWidth: '600px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s ease',
                    cursor: 'pointer'
                }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)'}
                >
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <img src={post.avatar} alt={post.user} style={{
                            width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px'
                        }} />
                        <h3 style={{ fontSize: '16px', fontWeight: 'bold' }}>{post.user}</h3>
                    </div>
                    <p style={{
                        fontSize: '14px', lineHeight: '1.6', color: '#333', margin: '0 0 10px 0'
                    }}>
                        {post.content}
                    </p>
                    {/* Conditionally render the image if it exists */}
                    {post.image && (
                        <img 
                            src={post.image} 
                            alt="Post image" 
                            style={{
                                width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '10px'
                            }} 
                        />
                    )}
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#aaa'
                    }}>
                        <span>2 hours ago</span>
                        <span>👍 15 Likes</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostsPage;
