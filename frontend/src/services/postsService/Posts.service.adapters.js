import { useCommentsAdapter } from "@/services/commentsService/Comments.service.adapters"
export const useAllPostsAdapter = data => {

    const adaptedPosts = data.map(post => ({
        id: post.id,
        title: post.title,
        body: post.body,
        image: post.image?.url,
        liked: post.liked,
        likes: post.likes,

        author: {
            id: post.author.id,
            name: post.author.username,
            avatar: post.author.avatar?.url
        },

        comments: useCommentsAdapter(post.comments)
    }))

    console.log(adaptedPosts)


    return adaptedPosts
}