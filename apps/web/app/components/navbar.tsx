import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Puzzle, Feather, Footprints, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type NavbarProps = {
  active?: "fragment" | "quote" | "timeline";
};

const Navbar = (props: NavbarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white p-6 border-b border-stone-800">
      <Button
        asChild
        variant={"link"}
        className="font-playfair text-xl font-bold text-stone-800 underline-offset-8"
      >
        <Link href="/" className="font-playfair font-bold text-xl">
          satuwaktu.
        </Link>
      </Button>
      <div className="flex items-center gap-8 font-plusJakartaSans">
        <Button
          asChild
          variant={"link"}
          className={cn(
            "font-bold text-stone-800 underline-offset-8",
            props.active === "fragment" && "underline"
          )}
        >
          <Link href="/fragment">
            Fragmen
            <Puzzle size={32} />
          </Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={cn(
            "font-bold text-stone-800 underline-offset-8",
            props.active === "quote" && "underline"
          )}
        >
          <Link href="/quote">
            Petikan
            <Feather size={32} />
          </Link>
        </Button>
        <Button
          asChild
          variant={"link"}
          className={cn(
            "font-bold text-stone-800 underline-offset-8",
            props.active === "timeline" && "underline"
          )}
        >
          <Link href="/timeline">
            Alur
            <Footprints size={32} />
          </Link>
        </Button>
        <Button
          asChild
          variant={"outline"}
          className="font-bold border-stone-800"
        >
          <Link href="/create">
            Rangkai
            <Sparkles size={32} />
          </Link>
        </Button>
        <Avatar asChild className="border border-stone-800">
          <Link href="/user/rizkymfrz">
            <AvatarImage src="/rizkymfrz.jpeg" />
          </Link>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
