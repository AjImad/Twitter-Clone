import React, { SVGProps } from 'react'

interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element, // we use capital I cause we gonna passing the entire component here 
    title: string
}

function SidebarRow({ Icon, title }: Props) {
    return (
        <div className='flex item-center space-x-2 py-2 px-3 rounded-full cursor-pointer hover:bg-gray-100 group'>
            <Icon className='h-6 w-6' />
            <p className='group-hover:text-twitter hidden lg:inline-flex text-base font-light lg:text-lg'>{title}</p>
        </div>
    )
}

export default SidebarRow