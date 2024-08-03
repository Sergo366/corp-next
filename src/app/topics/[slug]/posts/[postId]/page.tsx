import Link from "next/link";
import Paths from "@/paths";
import PostShow from "@/components/posts/post-show";
import CommentCreateForm from "@/components/comments/comment-create-form";

type PostShowPageProps = {
    params: {
        slug: string;
        postId: string;
    }
}

export default function PostShowPage({params: {slug, postId}}:PostShowPageProps) {
  return (
      <div className={'space-y-3'}>
            <Link href={Paths.topicShow(slug)} className={'underline decoration-solid'}>
                {`< Back to ${slug}`}
            </Link>
            <PostShow postId={postId}/>
            <CommentCreateForm postId={postId} startOpen />
      </div>
  )
}
