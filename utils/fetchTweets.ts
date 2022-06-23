import { Tweet } from "../typings";

// !! this is make call to my backend (SANITY) so now i can use it in my frontend
export const fetchTweets = async () => {
    // i make connection to that endpoint
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweets`)

    const data = await res.json();
    const tweets: Tweet[] = data.tweets;

    return tweets;
}