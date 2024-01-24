"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className='mt-16 prompt_layout'>
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}

const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([])

    const handleSearchChange = (e) => {

    }
    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch('/api/prompt');
            const data = await res.json();
            setPosts(data);
        }

        console.log(posts);
        fetchPost();
    }, [])
    return (
        <section className='feed'>
            <form className='relative w-full flex-center'>
                <input
                    type="text"
                    placeholder='Search for tag or a username'
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className='search_input'
                />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={() => { }}
            />


            {/* <PromptCard /> */}
        </section>
    )
}

export default Feed