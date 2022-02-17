import  { useMemo } from "react";

export const useSortedPosts = (posts, sort) => {
    const sortPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => (a[sort].localeCompare(b[sort])))
        }
        return posts;
    }, [sort, posts])
    return sortPost
};


export const usePosts = (posts, sort, query) => {
    const sortPost = useSortedPosts(posts, sort)

    const sortAndSearchPosts = useMemo(() => { //выдает итоги поиска
        return sortPost.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortPost])
    return sortAndSearchPosts;
};
