import React from 'react'
import { Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
    ChatAlt2Icon,
    HeartIcon,
    SwitchHorizontalIcon,
    UploadIcon,
} from '@heroicons/react/outline'

interface Props {
    // text: string
    // username: string
    // profileImg: string
    // image?: string
    tweet: Tweet
}

function Tweet({ tweet }: Props) {
    return (
        <div className='flex flex-col p-5 border-y border-gray-100'>
            <div className='flex space-x-3'>
                <img className='h-10 w-10 rounded-full object-cover' src={tweet.profileImg} alt='' />

                <div>
                    <div className='flex items-center space-x-1'>
                        <p className='mr-1 font-bold'>{tweet.username}</p>
                        <p className='hidden sm:inline text-sm text-gray-500'>@{tweet.username.replace(/\s+/g, '').toLowerCase()} · </p>

                        <TimeAgo
                            className='text-sm text-gray-500'
                            date={tweet._createdAt}
                        />
                    </div>

                    <p>{tweet.text}</p>
                    {tweet.image && <img src={tweet.image} alt=''
                        className='m-5 ml-0 mb-1 rounded-lg object-cover shadow-lg max-h-60'
                    />}
                </div>
            </div>

            <div className='flex justify-between text-gray-500 mt-5'>
                <div className='flex cursor-pointer items-center space-x-3'>
                    <ChatAlt2Icon className='flex h-5 w-5 items-center space-x-3' />
                    <p>5</p>
                </div>
                <div className='cursor-pointer'>
                    <SwitchHorizontalIcon className='flex h-5 w-5 items-center space-x-3' />
                </div>
                <div className='cursor-pointer'>
                    <HeartIcon className='flex h-5 w-5 items-center space-x-3' />
                </div>
                <div className='cursor-pointer'>
                    <UploadIcon className='flex h-5 w-5 items-center space-x-3' />
                </div>
            </div>
        </div>
    )
}

export default Tweet