import { itemsData } from "@/constants/itemsData";
import React from "react";
import { Card } from "../../card";
import { FaLeaf } from "react-icons/fa6";
import Link from "next/link";

export const GovApproach = () => {
  return (
    <section class="py-24 bg-offWhite">
      <div class="container mx-auto px-4">
        <Link
          href={"/"}
          class="uppercase text-green text-center text-sm font-bold font-heading mb-4 flex justify-center gap-2"
        >
          <FaLeaf className="text-green" size={22} /> New leaf
        </Link>
        <h2 class="text-center text-4xl lg:text-5xl font-bold font-heading mb-14">
          <span className="font-[100]">GOVERNANCE</span> APPROACH
        </h2>
        <div class="grid grid-cols-2 gap-10">
          {itemsData.map((item, id) => (
            <Card
              key={id}
              description={item.description}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
