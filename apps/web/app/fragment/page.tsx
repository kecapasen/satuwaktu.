"use client";
import Footer from "@/components/footer";
import FragmentCard from "@/components/fragment-card";
import Navbar from "@/components/navbar";
import { motion } from "motion/react";
import React from "react";

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

const Fragmen = () => {
  return (
    <div className="min-h-dvh">
      <Navbar active="fragment" />
      <div className="p-16 pt-32 grid grid-cols-3 gap-8">
        {Data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-1"
          >
            <FragmentCard
              song={item.song}
              title={item.title}
              date={item.date}
              imageUrl={item.image}
              userAvatar={item.authorImage}
              hashtags={item.hashtags}
              username={item.username}
            />
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Fragmen;
