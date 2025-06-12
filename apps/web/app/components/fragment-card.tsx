import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { AudioLines, Plus, Heart, MessageCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
type FragmentCardProps = {
  title: string;
  description?: string;
  imageUrl: string;
  hashtags: string[];
  song: string;
  date: string;
  username: string;
  userAvatar: string;
};
const FragmentCard = (props: FragmentCardProps) => {
  return (
    <Card className="relative aspect-square overflow-hidden group w-full border-stone-800 cursor-pointer">
      <Image
        src={props.imageUrl}
        alt="satuwaktu."
        fill
        quality={100}
        className="object-cover transition-all duration-300 ease-in-out"
      />
      <div className="absolute flex items-center justify-between left-0 right-0 top-0 transition-all p-4 bg-gradient-to-b from-stone-800 to-transparent">
        <div className="flex items-center gap-2 text-white">
          <AudioLines />
          <p className="font-plusJakartaSans text-xs font-medium">
            {props.song}
          </p>
        </div>
        <div className="flex items-center gap-4 text-white/80">
          <Badge
            variant="secondary"
            className="absolute top-4 right-16 text-stone-800"
          >
            {props.hashtags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </Badge>
          <Badge
            variant="secondary"
            className="absolute top-4 right-4 text-stone-800"
          >
            <Plus /> 2
          </Badge>
        </div>
      </div>
      <div className="absolute flex items-center justify-between left-0 right-0 bottom-0 p-4 bg-gradient-to-t from-stone-800 to-transparent">
        <div className="flex items-center gap-2">
          <Avatar asChild className="border border-stone-800">
            <Link href="/user/rizkymfrz">
              <AvatarImage src={props.userAvatar} />
            </Link>
          </Avatar>
          <div className="flex flex-col justify-center gap-1">
            <p className="font-plusJakartaSans text-xs text-white font-medium">
              {props.title}
            </p>
            <p className="text-stone-300 text-xs font-plusJakartaSans">
              {props.date}
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Heart
            size={20}
            className="hover:text-white transition text-white"
            fill="currentColor"
          />
          <MessageCircle
            size={20}
            className="hover:text-white transition text-stone-300"
          />
        </div>
      </div>
    </Card>
  );
};

export default FragmentCard;
