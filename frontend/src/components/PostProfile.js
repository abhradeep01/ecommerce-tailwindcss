import React from 'react'

function PostProfile({img,name,post}) {
  return (
    <div className="w-52 flex flex-col gap-2.5 border border-slate-200 rounded p-1">
        <div>
            <img src={img} alt={post} />
        </div>
        <div>
            <h2 className="text-lg font-semibold">
                {name}
            </h2>
        </div>
        <div>
            <h4 className="text-[0.8rem] font-semibold capitalize">
                {post}
            </h4>
        </div>
    </div>
  )
}

export default PostProfile;