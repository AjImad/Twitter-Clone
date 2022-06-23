export interface Tweet extends TweetBody {
    // this is coming back from SANITY
    _id: string
    _createdAt: string
    _updatedAt: string
    _type: 'tweet'
    blockTweet: boolean
}

export type TweetBody = { // this is stand for typing definition fast
    text: string
    username: string
    profileImg: string
    image?: string // ? mean that is image is optional not required
}