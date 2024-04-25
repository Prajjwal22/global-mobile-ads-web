import React from "react";

type Reviews = {
  rr: { review: string; name: string; designation: string };
};
export default function ReviewCard({ rr }: Reviews) {
  return (
    <div className="flex flex-col items-start">
      <span className="text-xl italic mb-10">“{rr.review}”</span>
      <span className="font-bold">{rr.name}</span>
      <span className="text-mute">{rr.designation}</span>
    </div>
  );
}
