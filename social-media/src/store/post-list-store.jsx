import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};

export const PostList = createContext(DEFAULT_CONTEXT);

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi frens, I am going to Mumbai for my vactions. Hope to enjoy a lot. Peace Out",
    reactions: 2,
    userId: "user-9",
    tags: ["vaction", "Mumbai", "Enjoying"],
  },
  {
    id: "w",
    title: "Pass hogaya bhai",
    body: "4 saal ki masti k baad bhi ho gate hain pass. Hard to beleive",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable", "Enjoying"],
  },
];

export default PostListProvider;
