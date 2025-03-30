import React from 'react';
import { useNavigate } from 'react-router-dom';

const GroupsList = () => {
    const navigate = useNavigate();
    const groups = [
        { name: "124th Ward", img: "/img/Jesus.png" },
        { name: "Sunshine Ward", img: "/img/familyphoto.jpg" },
        { name: "Heritage Ward", img: "/img/waffles.jpg" },
        { name: "Campus Ward", img: "/img/Jesus.png" },
        { name: "Young Adults Ward", img: "/img/familyphoto.jpg" },
        { name: "Service Ward", img: "/img/waffles.jpg" }
    ];

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Join a Group</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',  // 2 columns
                gridTemplateRows: 'repeat(3, 1fr)',    // 3 rows
                gap: '20px',
                justifyContent: 'center',
                padding: '20px',
                maxWidth: '800px',
                margin: 'auto'
            }}>
                {groups.map((group, index) => (
                    <div 
                        key={index} 
                        onClick={() => navigate('/Group')} 
                        style={{
                            background: 'white',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                            transition: 'transform 0.2s ease',
                            textAlign: 'center'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    >
                        <img 
                            src={group.img} 
                            alt={group.name} 
                            style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
                        />
                        <p style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            padding: '10px',
                            margin: 0
                        }}>
                            {group.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GroupsList;
