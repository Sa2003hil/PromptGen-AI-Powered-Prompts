"use client"
import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {

    const { data: session } = useSession();
    const pathName = usePathname();
    const router = useRouter();

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
                        alt='copy'
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

            {session?.user.id === post.creator._id && pathName === '/profile' && (
                <div className=' flex gap-3 m-auto justify-center items-center'>
                    <p className='font-inter text-sm green_gradient border-[1px] text-center rounded-full hover:scale-105  transition ease-in p-3  w-[30%] mt-3 border-green-400 cursor-pointer' onClick={handleEdit}>Edit</p>
                    <p className='font-inter text-sm orange_gradient border-[1px] text-center rounded-full hover:scale-105  transition ease-in p-3  w-[30%] mt-3 border-orange-300 cursor-pointer' onClick={handleDelete}>Delete</p>
                </div>
            )}
        </div>
    )
}

export default PromptCard