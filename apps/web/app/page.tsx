import React from "react";
import { Button } from "@/components/ui/button";
import { Puzzle, Footprints, Sparkles, Feather, LogIn } from "lucide-react";
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
    </div>
  );
};

export default Home;
