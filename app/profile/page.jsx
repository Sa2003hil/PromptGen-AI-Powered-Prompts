"use client"
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile'

const MyProfile = () => {
    const router = useRouter();

    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            setPosts(data);
        };

        if (session?.user.id) fetchPosts();

    }, [session]);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post.id}`);

    }

    const handleDelete = async (post) => {

    }
    return (
        <div className=' w-full mt-32 '>
            <Profile
                name="My"
                desc="Welcome to your personalized profile page"
                data={posts}
                handleEdit={handleEdit}  // Corrected from onClick to onClick={handleEdit}
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default MyProfile