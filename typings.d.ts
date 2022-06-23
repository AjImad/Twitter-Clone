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

export type CommentBody = {
    comment: string
    tweetId: string
    username: string
    profileImg: string
}

export interface Comment extends CommentBody {
    _createdAt: string
    _id: string
    _rev: string
    _type: 'comment'
    _updatedAt: string
    tweet: { // that the tweet that comment will be associat to it
        _ref: string
        _type: 'reference'
    }
}