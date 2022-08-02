import { axiosPrivate } from "../../Services/api/axios";
import React from "react";

const baseURL = "/carnet/all";

const Search = ()=> {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axiosPrivate.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.nombre}</h1>
      <p>{post.identidad}</p>
    </div>
  );
}

export default Search; 