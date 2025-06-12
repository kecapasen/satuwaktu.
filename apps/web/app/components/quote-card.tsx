import React from "react";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Verified } from "lucide-react";
import { Card } from "@/components/ui/card";

type QuoteCardProps = {
  content: string;
  author: string;
  createdAt: string;
  tags: string[];
};

const QuoteCard = (props: QuoteCardProps) => {
  return (
    <Card className="relative aspect-square overflow-hidden group w-full p-4 border-stone-800">
      <div className="text-stone-800 h-full flex flex-col justify-between">
        <div className="flex items-center gap-2 border-b border-stone-800 pb-4">
          <Avatar asChild className="border border-stone-800">
            <Link href="/user/rizkymfrz">
              <AvatarImage src="/rizkymfrz.jpeg" />
            </Link>
          </Avatar>
          <div className="flex flex-col justify-center gap-1">
            <Link
              href="/user/rizkymfrz"
              className="flex items-center gap-1 text-stone-800"
            >
              <p className="font-plusJakartaSans text-xs font-medium text-stone-800">
                {props.author}
              </p>
              <Verified className="text-white" fill="#292524" size={16} />
            </Link>
            <p className="text-stone-600 text-xs font-plusJakartaSans">
              {props.createdAt}
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg font-playfair text-stone-800 italic">
            {`“${props.content}”`}
          </p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {props.tags.map((tag, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-stone-800 font-plusJakartaSans"
            >
              {`#${tag}`}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default QuoteCard;
