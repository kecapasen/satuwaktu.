"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { motion } from "motion/react";
import React from "react";
import TimelineCard from "@/components/timeline-card";

const Data = [
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

const Timeline = () => {
  return (
    <div className="min-h-dvh">
      <Navbar active="timeline" />
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
            <TimelineCard
              title={item.title}
              memories={item.memories}
              username={item.username}
              authorImage={item.authorImage}
              createdAt={item.createdAt}
            />
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Timeline;
