import { Comment } from "../typings";

export const fetchComment = async (tweetId: string) => {
    const res = await fetch(`/api/getComments?tweetId=${tweetId}`) // ? called url query param, so will pass tweetId to getComment function as parametre

    const comments: Comment[] = await res.json()
    // const comments: Comment[] = data.comments

    return comments;
} 