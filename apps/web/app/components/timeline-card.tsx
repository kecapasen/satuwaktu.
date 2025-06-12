import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

type TimelineCardProps = {
  title: string;
  memories: string[];
  username: string;
  authorImage: string;
  createdAt: string;
};

const TimelineCard = (props: TimelineCardProps) => {
  return (
    <div className="group relative aspect-square cursor-pointer">
      <Card className="absolute inset-0 aspect-square overflow-hidden group w-full p-4 border-stone-800 group-hover:-left-3 group-hover:-top-2 group-hover:-rotate-3 transition-all duration-500 ease-in-out">
        <Image
          src={props.memories[2]!}
          alt="satuwaktu."
          fill
          quality={100}
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
      </Card>
      <Card className="absolute inset-0 aspect-square overflow-hidden group w-full p-4 border-stone-800 group-hover:left-3 group-hover:top-2 group-hover:rotate-3 transition-all duration-500 ease-in-out">
        <Image
          src={props.memories[1]!}
          alt="satuwaktu."
          fill
          quality={100}
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out"
        />
      </Card>
      <Card className="relative aspect-square overflow-hidden group w-full p-4 border-stone-800">
        <Image
          src={props.memories[0]!}
          alt="satuwaktu."
          fill
          quality={100}
          className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
        />{" "}
        <div className="absolute flex items-center gap-2 left-0 right-0 -bottom-16 group-hover:bottom-0 transition-all duration-500 ease-in-out p-4 bg-gradient-to-t from-stone-800 to-transparent">
          <Avatar asChild className="border border-stone-800">
            <Link href="/user/rizkymfrz">
              <AvatarImage src="/rizkymfrz.jpeg" />
            </Link>
          </Avatar>
          <div className="flex flex-col justify-center gap-1">
            <p className="font-plusJakartaSans text-xs text-white font-medium">
              {props.title}
            </p>
            <p className="text-stone-300 text-xs font-plusJakartaSans">
              12 Mei 2025
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-stone-300 w-0 group-hover:w-full transition-all duration-600 ease-in-out" />
      </Card>
    </div>
  );
};

export default TimelineCard;
