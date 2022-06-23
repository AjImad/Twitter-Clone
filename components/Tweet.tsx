import React from 'react'
import { Comment, Tweet } from '../typings'
import TimeAgo from 'react-timeago'
import {
    ChatAlt2Icon,
    HeartIcon,
    SwitchHorizontalIcon,
    UploadIcon,
} from '@heroicons/react/outline'
import { fetchComment } from '../utils/fetchComment'
// import {Comment} from '../'

interface Props {
    // text: string
    // username: string
    // profileImg: string
    // image?: string
    tweet: Tweet
}

function Tweet({ tweet }: Props) {

    const [comments, setComments] = React.useState<Comment[]>([])

    const refreshComments = async () => {
        const comments: Comment[] = await fetchComment(tweet._id)
        setComments(comments);
    }

    React.useEffect(() => {
        refreshComments();
    }, [])

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

            {
                comments?.length > 0 && (
                    <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
                        {comments.map(comment => (
                            <div key={comment._id} className='relative flex space-x-2'>
                                <hr className='absolute left-5 top-10 h-8 border-x border-gray-300/30' />
                                <img src={comment.profileImg} alt=''
                                    className='mt-2 h-7 w-7 object-cover rounded-full'
                                />
                                <div className=''>
                                    <div className='flex items-center space-x-1'>
                                        <p className='mr-1 font-bold text-sm'>{comment.username}</p>
                                        <p className='hidden text-sm text-gray-500 lg:inline'>@{comment.username.replace(/\s+/g, '').toLowerCase()} · </p>
                                        <TimeAgo date={comment._createdAt} className='text-sm text-gray-500' />
                                    </div>

                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Tweet