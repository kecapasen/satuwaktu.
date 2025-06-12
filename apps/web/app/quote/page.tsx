"use client";
import Footer from "@/components/footer";
import QuoteCard from "@/components/quote-card";
import Navbar from "@/components/navbar";
import { motion } from "motion/react";
import React from "react";

const Data = [
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

const Fragmen = () => {
  return (
    <div className="min-h-dvh">
      <Navbar active="quote" />
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
            <QuoteCard
              author={item.author}
              content={item.content}
              createdAt={item.createdAt}
              tags={item.tags}
            />
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Fragmen;
