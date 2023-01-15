import Axios from "@/api/axios"

import { useGetLikesAdapter, useLikeStatusAdapter } from "@/services/likesService/Likes.service.adapters"

const LikesService = {
    getLikesCountByPostId: async (postId) => {
        const likesCount = await Axios.get(`api/likes/count/${postId}`)

        return likesCount
    },

    createLike: async (postId) => {
        await Axios.post(`api/likes/${postId}`)
    },

    getLikes: async (id) => {
        const { data } = await Axios.get(`/api/posts/${id}?populate[0]=liked`)

        const { likesCount, likeStatus } = useGetLikesAdapter(data)

        return {
            likesCount,
            likeStatus
        }
    },

    like: async (id, like) => {
        const dataToPut = {
            data: {
                liked: like
            }
        }

        const { data } = await Axios.put(`/api/posts/${id}`, dataToPut)

        const { likeStatus, likesCount } = useLikeStatusAdapter(data)

        return { likeStatus, likesCount }
    }
}

export default LikesService