import {createBrowserRouter} from "react-router-dom";
import {Paths} from "./paths";
import {Posts} from "../../Pages/Posts/Posts";
import {PostItem} from "../../widgets/Post/PostItem";
import {PostDetails} from "../../Pages/PostDetails/PostDetails";


export const router = createBrowserRouter([
  {
    path:Paths.posts,
    element:<Posts/>
  },
  {
    path:Paths.post,
    element:<PostDetails/>
  }
]);