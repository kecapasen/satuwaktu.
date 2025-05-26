import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Puzzle, Footprints, Sparkles, Feather, LogIn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
const Home = () => {
  return (
    <div className="min-h-dvh">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white p-6 border-b border-stone-800">
        <p className="font-playfair font-bold text-xl">satuwaktu.</p>
        <div className="flex items-center gap-4 font-plusJakartaSans">
          <Button variant={"link"} className="font-bold text-stone-800">
            Fragmen
            <Puzzle size={32} />
          </Button>
          <Button variant={"link"} className="font-bold text-stone-800">
            Petikan
            <Feather size={32} />
          </Button>
          <Button variant={"link"} className="font-bold text-stone-800">
            Alur
            <Footprints size={32} />
          </Button>
          <Button
            variant={"outline"}
            className="font-bold text-stone-800 border-stone-800 dashed"
          >
            Rangkai
            <Sparkles size={32} />
          </Button>
          <Button className="font-bold">
            Masuk
            <LogIn size={32} />
          </Button>
        </div>
      </div>
      <div className="h-dvh flex items-center gap-8 pb-6 px-12 pt-24 font-plusJakartaSans text-stone-800">
        <Card className="relative aspect-square h-96 overflow-hidden group w-full">
          <Image
            className="grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out object-cover"
            alt="satuwaktu."
            src={"/hero.jpeg"}
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
          <div className="absolute flex items-center gap-4 left-0 right-0 -bottom-8 h-12 group-hover:bottom-0 transition-all duration-300 ease-in-out p-4">
            <Avatar>
              <AvatarImage src=""></AvatarImage>
            </Avatar>
            <p className="font-plusJakartaSans text-white font-bold">
              satuwaktu.
            </p>
          </div>
        </Card>
        <div className="h-64">
          <Separator orientation="vertical" className="bg-stone-800" />
        </div>
        <div>
          <p className="font-bold font-playfair text-xl text-justify">
            satuwaktu.
            <br />
            <br />
            <span className="text-lg font-medium text-stone-600">
              /sa·tu·wak·tu/
              <br />
              <span className="text-stone-800">
                nomina; keadaan di mana fragmen hidup berserakan, lalu dirangkai
                ulang dengan rasa, bukan urutan. Bukan untuk mengulang masa
                lalu, melainkan untuk mengingat bahwa kita pernah ada—di satu
                waktu yang nyaris tak disengaja.
              </span>
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
