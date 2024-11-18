import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DashBoard.css'; // Import the CSS file

const DashBoard = () => {
    const [videos, setVideos] = useState([]);
    const API_KEY = 'AIzaSyDiMF5BGMfLZ42xbwGjh4kdYT7GMWE32qw';

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        part: 'snippet',
                        q: 'India Stocks videos',
                        type: 'video',
                        order: 'rating',
                        maxResults: 4,
                        key: API_KEY,
                    },
                });
                setVideos(response.data.items);
            } catch (error) {
                console.error('Error fetching YouTube videos:', error);
            }
        };

        fetchVideos();
    }, []);

    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard</h1>
            <p>This is your dashboard where you can see all the important information at a glance.</p>
            <h2>Top BSE Videos</h2>
            <div className="video-list">
                {videos.map((video) => (
                    <div key={video.id.videoId} className="video-item">
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
                        <h3>{video.snippet.title}</h3>
                        <p>{video.snippet.description}</p>
                        <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
                            Watch on YouTube
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DashBoard;
