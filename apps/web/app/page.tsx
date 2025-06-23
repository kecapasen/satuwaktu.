"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Puzzle,
  Footprints,
  Feather,
  Heart,
  MessageCircle,
  Plus,
  AudioLines,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "motion/react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FragmentCard from "@/components/fragment-card";
import QuoteCard from "@/components/quote-card";
import TimelineCard from "./components/timeline-card";
const Data = [
  {
    song: "Place - Maroon 5",
    title: "Lorem ipsum dolor sit amet",
    date: "12 November 2024",
    image: "/villagio.jpeg",
    authorImage: "/rizkymfrz.jpeg",
    hashtags: ["#mall"],
    username: "rizkymfrz",
  },
  {
    song: "Photograph - Ed Sheeran",
    title: "Lorem ipsum dolor sit amet",
    date: "5 April 2025",
    image: "/sepatu.jpeg",
    authorImage: "/rizkymfrz.jpeg",
    hashtags: ["#shoes"],
    username: "rizkymfrz",
  },
  {
    song: "Perfect - Ed Sheeran",
    title: "Lorem ipsum dolor sit amet",
    date: "14 Februari 2025",
    image: "/gramedia.jpeg",
    authorImage: "/rizkymfrz.jpeg",
    hashtags: ["#book"],
    username: "rizkymfrz",
  },
  {
    song: "Memories - Maroon 5",
    title: "Lorem ipsum dolor sit amet",
    date: "1 Januari 2025",
    image: "/playground.jpeg",
    authorImage: "/rizkymfrz.jpeg",
    hashtags: ["#playground"],
    username: "rizkymfrz",
  },
  {
    song: "All of Me - John Legend",
    title: "Lorem ipsum dolor sit amet",
    date: "20 Desember 2024",
    image: "/mall.jpeg",
    authorImage: "/rizkymfrz.jpeg",
    hashtags: ["#mall"],
    username: "rizkymfrz",
  },
  {
    song: "Yum - Maroon 5",
    title: "Lorem ipsum dolor sit amet",
    date: "30 November 2024",
    image: "/donat.jpeg",
    authorImage: "/rizkymfrz.jpeg",
    hashtags: ["#food"],
    username: "rizkymfrz",
  },
];
const pinnedQuotes = [
  {
    id: "quote-1",
    author: "rizkymfrz",
    avatar: "/rizkymfrz.jpeg",
    content:
      "Tak semua yang hening berarti hilang—kadang, ia hanya sedang menyimpan gema yang tak sempat terucap.",
    tags: ["hening", "gema", "rasa"],
    createdAt: "20 Mei 2025",
  },
  {
    id: "quote-2",
    author: "rizkymfrz",
    avatar: "/rizkymfrz.jpeg",
    content:
      "Ada yang tetap tinggal meski tak diminta—seperti ingatan yang diam-diam menyelip di sela waktu.",
    tags: ["ingatan", "waktu", "diam-diam"],
    createdAt: "19 Januari 2025",
  },
  {
    id: "quote-3",
    author: "rizkymfrz",
    avatar: "/rizkymfrz.jpeg",
    content:
      "Jika rindu punya aksara, maka setiap diam adalah paragraf yang belum selesai.",
    tags: ["rindu", "aksara", "diam"],
    createdAt: "8 Februari 2025",
  },
  {
    id: "quote-4",
    author: "rizkymfrz",
    avatar: "/rizkymfrz.jpeg",
    content:
      "Barangkali yang membuatnya bermakna bukan kejadiannya, tapi karena kau ada di dalamnya.",
    tags: ["makna", "kau", "bersama"],
    createdAt: "16 Mei 2025",
  },
  {
    id: "quote-5",
    author: "rizkymfrz",
    avatar: "/rizkymfrz.jpeg",
    content:
      "Waktu tak bisa diputar, tapi kenangan tahu caranya kembali—dalam bentuk rasa yang samar.",
    tags: ["waktu", "kenangan", "samar"],
    createdAt: "1 Desember 2024",
  },
  {
    id: "quote-6",
    author: "rizkymfrz",
    avatar: "/rizkymfrz.jpeg",
    content:
      "Setiap kutipan adalah sisa suara yang takut hilang, lalu disematkan dalam sunyi bernama satuwaktu.",
    tags: ["satuwaktu", "sunyi", "kutipan"],
    createdAt: "1 Januari 2025",
  },
];
const timeline = [
  {
    title: "Lorem ipsum dolor sit amet",
    memories: ["/sepatu.jpeg", "/gramedia.jpeg", "/karangpawitan.jpeg"],
    username: "rizkymfrz",
    authorImage: "/rizkymfrz.jpeg",
    createdAt: "12 Mei 2025",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    memories: ["/donat.jpeg", "/playground.jpeg", "/sepatu.jpeg"],
    username: "rizkymfrz",
    authorImage: "/rizkymfrz.jpeg",
    createdAt: "12 Mei 2025",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    memories: ["/mall.jpeg", "/villagio.jpeg", "/gramedia.jpeg"],
    username: "rizkymfrz",
    authorImage: "/rizkymfrz.jpeg",
    createdAt: "12 Mei 2025",
  },
];

const Home = () => {
  const audioRef = React.useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = React.useRef<NodeJS.Timeout | null>(null);
  const loopIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const previewStart = 60;
    const previewDuration = 15;

    if (fadeIntervalRef.current) clearInterval(fadeIntervalRef.current);
    if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);

    audio.muted = false;
    audio.currentTime = previewStart;
    audio.volume = 0;
    audio.play();

    fadeIntervalRef.current = setInterval(() => {
      if (!audio || audio.paused) return;
      if (audio.volume < 1) {
        audio.volume = Math.min(audio.volume + 0.05, 1);
      } else {
        clearInterval(fadeIntervalRef.current!);
      }
    }, 100);
    loopIntervalRef.current = setInterval(() => {
      if (!audio) return;
      if (audio.currentTime >= previewStart + previewDuration) {
        audio.currentTime = previewStart;
      }
    }, 200);
  };

  const handleMouseLeave = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();

    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
      fadeIntervalRef.current = null;
    }
    if (loopIntervalRef.current) {
      clearInterval(loopIntervalRef.current);
      loopIntervalRef.current = null;
    }
  };

  return (
    <div className="min-h-dvh">
      <Navbar />
      <div className="flex gap-8 p-16 pt-32 font-plusJakartaSans text-stone-800">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full flex items-center"
        >
          <Card
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="h-96 aspect-square relative group overflow-hidden border-stone-800 w-full cursor-pointer"
          >
            <audio ref={audioRef} src="/music.mp3" preload="auto" muted />
            <Image
              src="/hero.jpeg"
              alt="satuwaktu."
              fill
              quality={100}
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out object-bottom-left group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300 ease-in-out" />
            <div className="absolute flex items-center justify-between left-0 right-0 -top-16 group-hover:top-0 transition-all p-4 bg-gradient-to-b from-stone-800 to-transparent">
              <div className="flex items-center gap-2 text-white">
                <AudioLines />
                <p className="font-plusJakartaSans text-xs font-medium">
                  Ribuan Memori - Lomba Sihir
                </p>
              </div>
              <div className="flex items-center gap-4 text-white/80">
                <Badge
                  variant="secondary"
                  className="absolute top-4 right-16 text-stone-800"
                >
                  #couple
                </Badge>
                <Badge
                  variant="secondary"
                  className="absolute top-4 right-4 text-stone-800"
                >
                  <Plus /> 2
                </Badge>
              </div>
            </div>
            <div className="absolute flex items-center justify-between left-0 right-0 -bottom-16 group-hover:bottom-0 transition-all duration-500 ease-in-out p-4 bg-gradient-to-t from-stone-800 to-transparent">
              <div className="flex items-center gap-2">
                <Avatar asChild className="border border-stone-800">
                  <Link href="/user/rizkymfrz">
                    <AvatarImage src="/rizkymfrz.jpeg" />
                  </Link>
                </Avatar>
                <div className="flex flex-col justify-center gap-1">
                  <p className="font-plusJakartaSans text-xs text-white font-medium">
                    Momen itu tak pernah direncanakan
                  </p>
                  <p className="text-stone-300 text-xs">12 Mei 2025</p>
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
            <div className="absolute bottom-0 left-0 h-1 bg-stone-300 w-0 group-hover:w-full transition-all duration-600 ease-in-out" />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-8"
        >
          <div className="h-80">
            <Separator orientation="vertical" className="bg-stone-800" />
          </div>
          <div className="flex flex-col gap-8 font-bold text-stone-800 text-justify">
            <p className="text-stone-800 font-playfair text-xl">satuwaktu.</p>
            <div className="font-playfair">
              <p className="text-lg font-medium text-stone-600">
                /sa·tu·wak·tu/
              </p>
              <p className="text-stone-600">
                nomina; keadaan di mana fragmen hidup berserakan, lalu dirangkai
                ulang dengan rasa, bukan urutan. Bukan untuk mengulang masa
                lalu, melainkan untuk mengingat bahwa kita ada di{" "}
                <span className="text-stone-800 underline underline-offset-4">
                  satuwaktu.
                </span>{" "}
                yang nyaris tak disengaja.
              </p>
            </div>
            <Button
              asChild
              className="font-plusJakartaSans font-bold bg-stone-800"
              size={"lg"}
            >
              <Link href="/fragment">
                <Puzzle size={32} />
                Fragmen Terpatri
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="bg-stone-300 p-16 pt-8 shadow-inner flex flex-col gap-8 justify-center">
        <div className="font-bold font-playfair text-stone-800 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-xl">Fragment Terpilih</p>
            <Puzzle />
          </div>
          <p className="text-stone-600">
            Potongan waktu yang tersisa di antara lalu dan nanti.
          </p>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {Data.map((item, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="p-1"
                >
                  <FragmentCard
                    imageUrl={item.image}
                    song={item.song}
                    title={item.title}
                    date={item.date}
                    userAvatar={item.authorImage}
                    hashtags={item.hashtags}
                    username={item.username}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="p-16 pt-8 flex flex-col gap-8 justify-center">
        <div className="font-bold font-playfair text-stone-800 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-xl text-stone-800">Petikan Sunyi</p>
            <Feather />
          </div>
          <p className="text-stone-600">
            Suara yang tak sempat lantang, kini hidup dalam aksara.
          </p>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {pinnedQuotes.map((item, index) => (
              <CarouselItem key={index} className="basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="p-1"
                >
                  <QuoteCard
                    author={item.author}
                    content={item.content}
                    createdAt={item.createdAt}
                    tags={item.tags}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="bg-stone-300 p-16 pt-8 shadow-inner flex flex-col gap-8 justify-center">
        <div className="font-bold font-playfair text-stone-800 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-xl">Alur Kenangan</p>
            <Footprints />
          </div>
          <p className="text-stone-600">
            Jejak yang ditinggal waktu, terhubung dalam satu garis.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-16">
          {timeline.map((data, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
              key={index}
            >
              <TimelineCard
                title={data.title}
                memories={data.memories}
                username={data.username}
                authorImage={data.authorImage}
                createdAt={data.createdAt}
              />
            </motion.div>
          ))}
        </div>
        <Button className="font-bold bg-stone-800 cursor-pointer" size="lg">
          <Plus size={24} />
          Lihat Lebih Banyak
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
