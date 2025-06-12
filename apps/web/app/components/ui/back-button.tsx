import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const BackButton = () => {
  return (
    <div>
      <Button asChild variant="link" className="underline-offset-8">
        <Link href="/">
          <ChevronLeft size={32} />
          <p className="font-bold text-xl">Kembali</p>
        </Link>
      </Button>
    </div>
  );
};

export default BackButton;
