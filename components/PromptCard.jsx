"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

    const [copied, setcopied] = useState("");
    const handleCopy = () => {
        setcopied(post.prompt);
        navigator.clipboard.writeText(post.prompt);
        setTimeout(() => setcopied(""), 3000);
    }

    return (
        <div className='prompt_card'>
            <div className='flex justify-between  items-start gap-5 '>
                <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
                    <Image
                        src={post.creator?.image}
                        alt='user_img'
                        width={40}
                        height={40}
                        className='rounded-full object-fill'
                    />

                    <div className=' flex flex-col'>
                        <h2 className='font-santoshi font-semibold text-gray-900'>{post.creator.username}</h2>
                        <p className='font-inter text-sm text-gray-500'>{post.creator.email}</p>
                    </div>
                </div>
                <div className='copy_btn' onClick={handleCopy}>
                    <Image
                        src={copied === post.prompt ? '/assets/icons/tick.svg' :
                            '/assets/icons/copy.svg'
                        }
                        width={12}
                        height={12}
                    >

                    </Image>
                </div>
            </div>
            <p className='my-4 font-santoshi text-sm text-gray-700'>{post.prompt}</p>
            <p className='font-inter text-sm blue_gradient cursor-pointer' onClick={() => handleTagClick && handleTagClick(post.tag)}>{post.tag}</p>
        </div>
    )
}

export default PromptCard