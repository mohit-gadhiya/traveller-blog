import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { getAllPosts } from "../../api-helper/ApiHelper";
import DiaryItem from "./DiaryItem";

const Diaries = () => {
  const [posts, setPosts] = useState();
  const mountRef = useRef(true);

  useEffect(() => {
    if (mountRef.current) {
      mountRef.current = false;
      getAllPosts()
        .then((data) => setPosts(data?.posts))
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      padding={3}
      flexDirection="column"
    >
      {posts &&
        posts.map((item, index) => (
          <DiaryItem
            key={index}
            date={new Date(`${item.date}`).toLocaleDateString()}
            description={item.description}
            image={item.image}
            id={item._id}
            location={item.location}
            title={item.title}
            user={item.user._id}
            name={item.user.name}
          />
        ))}
    </Box>
  );
};

export default Diaries;
