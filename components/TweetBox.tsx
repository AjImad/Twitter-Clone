import React from 'react'
import {
    CalendarIcon,
    EmojiHappyIcon,
    LocationMarkerIcon,
    PhotographIcon,
    SearchCircleIcon
} from '@heroicons/react/outline';

function TweetBox() {

    const [input, setInput] = React.useState<string>('')

    return (
        <div className='flex flex-1 space-x-2 p-5'>
            <img className='h-14 w-14 object-cover rounded-full mt-3' src='https://links.papareact.com/gll' alt='' />

            <div className='flex flex-1 items-center pl-2'>
                <form className='flex flex-1 flex-col'>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type='text' placeholder="What's Happening?" className='h-24 outline-none placeholder:text-lg text-lg' />
                    <div className='flex items-center'>
                        <div className='flex space-x-2 text-twitter flex-1'>
                            <PhotographIcon className='h-5 w-5 transition-transform duration-150 ease-out hover:scale-125 cursor-pointer' />
                            <SearchCircleIcon className='h-5 w-5 transition-transform duration-150 ease-out hover:scale-125 cursor-pointer' />
                            <EmojiHappyIcon className='h-5 w-5 transition-transform duration-150 ease-out hover:scale-125 cursor-pointer' />
                            <CalendarIcon className='h-5 w-5 transition-transform duration-150 ease-out hover:scale-125 cursor-pointer' />
                            <LocationMarkerIcon className='h-5 w-5 transition-transform duration-150 ease-out hover:scale-125 cursor-pointer' />
                        </div>
                        <button disabled={!input} className='bg-twitter text-white px-4 py-2 rounded-full font-bold disabled:opacity-40'>Tweet</button>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default TweetBox;