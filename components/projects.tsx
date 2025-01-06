"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
export function Projects() {
  const tabs = [
    {
      title: "MeetHub",
      value: "meethub",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>MeetHub</p>
          <div className="flex flex-col">

            <div>
              <p className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32" >Meethub is an Online Real time Meeting Application</p>
            </div>

            <Image
              src="/MeetHub.webp"
              alt="dummy image"
              width="1000"
              height="1000"
              className="    md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto "
            />
            <div className="mt-12 md:mt-20">
              <p className="text-sm  md:text-xl">MeetHub is a cutting-edge online real-time meeting application designed to enhance communication and collaboration for users across various sectors. With its intuitive interface, MeetHub allows users to create and join virtual meeting rooms effortlessly, making it ideal for both personal and professional use.</p>
            </div>
          </div>
        </div>

      ),
    },
    {
      title: "SyncroCode",
      value: "syncrocode",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>SyncroCode</p>
          <div className="flex flex-col">

            <div>
              <p className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32" >Real Time Code with SyncroCode!</p>
            </div>
          <Image
            src="/SyncroCode.webp"
            alt="dummy image"
            width="500"
            height="500"
            className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto "
          />
          <div className="mt-12 md:mt-20">
              <p className="text-sm  md:text-xl">Syncrocode is an advanced collaboration platform tailored for developers, enabling real-time coding and project management. This powerful tool streamlines the development workflow by allowing multiple users to work concurrently on code, enhancing teamwork and productivity.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Airdrop-SOL",
      value: "airdropsol",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Airdrop-SOL</p>
          <div className="flex flex-col">

            <div>
              <p className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32" >Solana Airdrop & Send with Airdrop SOL</p>
            </div>
          <Image
            src="/AirdropSOL.webp"
            alt="dummy image"
            width="500"
            height="500"
            className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto "
          />
          <div className="mt-12 md:mt-20">
              <p className="text-sm  md:text-xl">Airdrop SOL is an innovative website designed to facilitate the distribution of Solana (SOL) tokens through airdrops and free faucets. This platform empowers users, developers, and projects to easily send SOL to multiple wallet addresses, enhancing community engagement and participation in the Solana ecosystem.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Web Crypto Wallet",
      value: "webcryptowallet",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Web Crypto Wallet</p>
          <div className="flex flex-col">

            <div>
              <p className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32" >Web Based Crypto Wallet Creator</p>
            </div>
          <Image
            src="/WebCryptoWallet.webp"
            alt="dummy image"
            width="500"
            height="500"
            className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto"
          />
          <div className="mt-12 md:mt-20">
              <p className="text-sm  md:text-xl">Web Crypto Wallet is a simple, web-based application designed to empower users to create and manage wallets for Bitcoin, Ethereum, and Solana. This platform aims to provide a secure and user-friendly experience for both beginners and experienced cryptocurrency enthusiasts.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Medium Blog",
      value: "mediumblog",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Medium Blog</p>
          <div className="flex flex-col">

            <div>
              <p className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32" >Share your Blogs Medium Blog by Rahul</p>
            </div>
          <Image
            src="/MediumBlog.webp"
            alt="dummy image"
            width="500"
            height="500"
            className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto"
          />
          <div className="mt-12 md:mt-20">
              <p className="text-sm  md:text-xl">Medium Blog is a straightforward blogging platform designed for users to share their thoughts, stories, and expertise with a global audience. This user-friendly website empowers writers of all levels to create and publish content effortlessly, fostering a vibrant community of readers and contributors.</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="projects" className="h-[20rem] md:h-[40rem] [perspective:1000px]  b flex flex-col max-w-5xl mx-auto w-full   justify-start my-40">
      <h2 className="text-3xl font-bold mb-8 text-center items-center">
        Projects
      </h2>
      <Tabs tabs={tabs} />
    </div>





















  );
}


