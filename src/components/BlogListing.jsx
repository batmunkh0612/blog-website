import { Button } from "./Button";
import { Post } from "./Post"

const defaultProfileImage =
  "https://s3-alpha-sig.figma.com/img/cdb3/29d9/d185cf9e5357b2ca38597c49da427202?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S-moL~2qU6PCPG-zjWvcc59j4S64QW-8xAIbSr8zRwhPxpa8gcBfN016tGE4DgiqFgsYCxqiNnqmGCjCrSO1nCRPOUlE99KzD2gaMzo~5WparLtyPLKkZSxti2yJeZhFBCFPs99A7jJNqvXhFW0riLqn~iKaV46EQbgMHRdDDI5rDT4zx~JGSl8Uxj1eNa1uzAyr4p31LE8TlmxRcL3znHy6uDePW50q00hcPUXolWjfNT7Aiu2SPHNx0BTW7TDb7jn8fWA7reuKnUO1NXytLQtFc9wK6txLTiDrGNXC0goCMzGj0ugyjTpluGQoKljZ0hYvReRbrVjgcOKgRcfUwg__";

  const mockData = new Array(12).fill('10');

export const BlogListing = () => {
    return <div className="flex flex-col gap-12">
        <h2 className="text-[#181A2A] text-[24px] font-bold leading-7">
            All Blog Post
        </h2>
        <div className="flex flex-wrap items-start gap-5">
            {mockData.map((post, i) => <Post key={i} profileImage={defaultProfileImage} />)}
        </div>
        <Button />
    </div>
}