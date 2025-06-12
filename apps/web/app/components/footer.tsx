import { Separator } from "@/components/ui/separator";
import { Sparkles, Heart } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="p-16 flex flex-col gap-8 justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="font-bold font-playfair text-stone-800 flex flex-col items-center gap-8"
      >
        <div className="relative">
          <p className="text-2xl italic text-center">
            “Beberapa waktu tak bisa diulang, <br /> tapi bisa disimpan.”
          </p>
          <Sparkles className="absolute -top-4 -left-16 -rotate-12" />
          <Sparkles className="absolute -bottom-4 -right-16 rotate-9" />
        </div>
        <div className="w-96">
          <Separator className="bg-stone-800" />
        </div>
        <div className="flex flex-col items-center gap-2 italic">
          <p className="text-stone-600 flex items-center gap-1">
            - Dibuat dengan{" "}
            <Heart size={16} className="text-stone-800" fill="currentColor" />
            oleh{" "}
            <Link
              href="https://instagram.com/rizkymfrz"
              target="_blank"
              className="text-stone-800 underline underline-offset-4"
            >
              manusia biasa,
            </Link>{" "}
            untuk{" "}
            <Link
              href="https://instagram.com/annfarta"
              target="_blank"
              className="text-stone-800 underline underline-offset-4"
            >
              kenangan luar biasa.
            </Link>
          </p>
          <p className="text-stone-800">
            &copy; {new Date().getFullYear()} satuwaktu. Semua fragmen punya
            cerita.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
