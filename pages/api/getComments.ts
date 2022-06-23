// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Comment } from '../../typings'
import { sanityClient } from '../../sanity'
import { groq } from 'next-sanity'

const commentQuery = groq`
*[_type == 'comment' && references(*[_type == 'tweet' && _id == $tweetId]._id)] {
    _id,
    ...
  } | order(_createdAt desc)
`
// const commentQuery = groq`
//     *[_type == 'comment' && references(*[_type == 'tweet' && _id == 'c65d01f3-22f7-4869-a731-0eea43fd71a5']._id)] {
//         _id,
//         ...
//     } | order(_createdAt desc)
// `


type Data = Comment[]
// {
//     comments: Comment[]
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { tweetId } = req.query;
    const comments: Comment[] = await sanityClient.fetch(commentQuery, { tweetId });
    res.status(200).json(comments)
}
