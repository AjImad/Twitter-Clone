import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

function Widgets() {
    return (
        <div className='mt-2 px-2'>
            <div className='flex items-center space-x-2 bg-gray-200
        rounded-full p-3'>
                {/* Search */}
                <SearchIcon className='h-5 w-5 text-gray-400' />
                <input
                    type="text"
                    placeholder='Search Twitter'
                    className='bg-transparent outline-none flex-1' />
            </div>

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="sonnysangha"
                options={{ height: 1000 }}
            />
        </div>
    )
}

export default Widgets