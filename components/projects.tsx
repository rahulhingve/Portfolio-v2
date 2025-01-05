"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
export function Projects() {
  const tabs = [
    {
      title: "MeetHub",
      value: "meethub",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>MeetHub</p>
          <Image
      src="/full1.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="    md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto "
    />
        </div>
      ),
    },
    {
      title: "SyncroCode",
      value: "syncrocode",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>SyncroCode</p>
          <Image
      src="/full1.webp"
      alt="dummy image"
      width="500"
      height="500"
      className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto "
    />
        </div>
      ),
    },
    {
      title: "Airdrop-SOL",
      value: "airdropsol",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Airdrop-SOL</p>
          <Image
      src="/full1.webp"
      alt="dummy image"
      width="500"
      height="500"
      className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto "
    />
        </div>
      ),
    },
    {
      title: "Web Crypto Wallet",
      value: "webcryptowallet",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Web Crypto Wallet</p>
          <Image
      src="/full1.webp"
      alt="dummy image"
      width="500"
      height="500"
      className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto"
    />
        </div>
      ),
    },
    {
      title: "Medium Blog",
      value: "mediumblog",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Medium Blog</p>
          <Image
      src="/full1.webp"
      alt="dummy image"
      width="500"
      height="500"
      className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto"
    />
        </div>
      ),
    },
  ];

  return (
    <div id="projects" className="h-[20rem] md:h-[40rem] [perspective:1000px]  b flex flex-col max-w-5xl mx-auto w-full   justify-start my-40">
      <h2  className="text-3xl font-bold mb-8 text-center items-center">
        Projects
      </h2>
      <Tabs tabs={tabs} />
    </div>





















  );
}


