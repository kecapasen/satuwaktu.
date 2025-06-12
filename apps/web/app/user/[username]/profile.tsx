"use client";
import React from "react";
import Image from "next/image";
import BackButton from "@/components/ui/back-button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Feather, Footprints, Puzzle, Verified } from "lucide-react";
import { motion } from "motion/react";

const Data = [
  {
    image: "/villagio.jpeg",
  },
  {
    image: "/sepatu.jpeg",
  },
  {
    image: "/gramedia.jpeg",
  },
  {
    image: "/playground.jpeg",
  },
  {
    image: "/mall.jpeg",
  },
  {
    image: "/donat.jpeg",
  },
];

const Profile = (params: { username: string }) => {
  const { username } = params;
  return (
    <div className="min-h-dvh flex flex-col items-center py-8 px-16 font-plusJakartaSans text-stone-800">
      <div className="w-xl flex flex-col gap-8">
        <BackButton />
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Avatar asChild className="border border-stone-800 h-32 w-32">
                <AvatarImage src="/rizkymfrz.jpeg" />
              </Avatar>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="col-span-2 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <p className="font-plusJakartaSans text-xl font-medium">
                    {username}
                  </p>
                  <Verified className="text-white" fill="#292524" />
                </div>
                <Button
                  size="sm"
                  variant={"outline"}
                  className="border-stone-800 text-stone-800"
                >
                  Edit Profil
                </Button>
                <Button size="sm" className="bg-stone-800">
                  Hapus Akun
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 font-bold">
                <p>
                  6 <span className="text-stone-600 font-medium">fragmen</span>
                </p>
                <p>
                  6 <span className="text-stone-600 font-medium">petikan</span>
                </p>
                <p>
                  3 <span className="text-stone-600 font-medium">alur</span>
                </p>
              </div>
              <div className="flex flex-col">
                <p className="font-bold text-sm">{username}</p>
                <p className="font-medium text-sm">
                  writing stories between the lines.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-4">
            <Separator className="bg-stone-800" />
            <div className="grid grid-cols-3">
              <div className="flex gap-2 items-center justify-center">
                <Puzzle size={16} />
                <p className="font-bold text-sm">FRAGMEN</p>
              </div>
              <div className="flex gap-2 items-center justify-center text-stone-600">
                <Feather size={16} />
                <p className="font-bold text-sm">PETIKAN</p>
              </div>
              <div className="flex gap-2 items-center justify-center text-stone-600">
                <Footprints size={16} />
                <p className="font-bold text-sm">ALUR</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 border border-stone-800"
            >
              {Data.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative aspect-square cursor-pointer border border-stone-800 overflow-hidden"
                >
                  <Image
                    fill
                    src={item.image}
                    alt="satuwaktu."
                    className="object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
