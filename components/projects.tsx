"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import { LinkPreview } from "@/components/ui/link-preview";


export function Projects({id}:any) {
  const tabs = [
    {
      title: "MeetHub",
      value: "meethub",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>MeetHub</p>
          <div className="flex flex-col">

            <div className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32">

              <LinkPreview
                url="https://meetshub.vercel.app"
                imageSrc="/MeetHub.webp"
                isStatic
                className="font-bold"
              >
                MeetHub
              </LinkPreview>
              {" is an Online Real time Meeting Application"}
              <LinkPreview
                url="https://github.com/rahulhingve/rtma"
                imageSrc="/gitMeetHub.webp"
                isStatic
                className="font-bold"
              >
                <Image
                  src="/github-mark.svg"
                  alt="github logo"
                  width="50"
                  height="50"
                  className="flex md:w-[10%] mx-auto"
                /></LinkPreview>
            </div>



            <Image
              src="/MeetHub.webp"
              alt="dummy image"
              width="1000"
              height="1000"
              className="    md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto "
            />

            <div className="mt-4 md:mt-8">
              <div className="text-sm  md:text-xl">

                <LinkPreview

                  url="https://meetshub.vercel.app"
                  imageSrc="/MeetHub.webp"
                  isStatic
                  className="font-bold"
                >
                  MeetHub
                </LinkPreview>{" is a cutting-edge online real-time meeting application designed to enhance communication and collaboration for users across various sectors. With its intuitive interface, MeetHub allows users to create and join virtual meeting rooms effortlessly, making it ideal for both personal and professional use."}
              </div>

            </div>
          </div>
        </div>

      ),
    },
    {
      title: "SyncroCode",
      value: "syncrocode",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>SyncroCode</p>
          <div className="flex flex-col">

            <div className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32">
              {"Real Time Code with "}<LinkPreview
                url="https://syncrocode.vercel.app"
                imageSrc="/SyncroCode.webp"
                isStatic
                className="font-bold"
              >
                SyncroCode
              </LinkPreview>
              <LinkPreview
                url="https://github.com/rahulhingve/rtctd"
                imageSrc="/gitMeetHub.webp"
                isStatic
                className="font-bold"
              >
                <Image
                  src="/github-mark.svg"
                  alt="github logo"
                  width="50"
                  height="50"
                  className="flex md:w-[10%] mx-auto"
                /></LinkPreview>
            </div>



            <Image
              src="/SyncroCode.webp"
              alt="dummy image"
              width="500"
              height="500"
              className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto "
            />
            <div className="mt-4 md:mt-8">
              <div className="text-sm  md:text-xl"><LinkPreview
                url="https://syncrocode.vercel.app"
                imageSrc="/SyncroCode.webp"
                isStatic
                className="font-bold"
              >
                SyncroCode
              </LinkPreview>{" is an advanced collaboration platform tailored for developers, enabling real-time coding and project management. This powerful tool streamlines the development workflow by allowing multiple users to work concurrently on code, enhancing teamwork and productivity."}</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Airdrop-SOL",
      value: "airdropsol",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Airdrop-SOL</p>
          <div className="flex flex-col">

            <div className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32">
              {"Solana Airdrop & Send with "}<LinkPreview
                url="https://sol-dapp-zeta.vercel.app"
                imageSrc="/AirdropSOL.webp"
                isStatic
                className="font-bold"
              >
                Airdrop SOL
              </LinkPreview>
              <LinkPreview
                url="https://github.com/rahulhingve/Airdrop-Sol"
                imageSrc="/gitMeetHub.webp"
                isStatic
                className="font-bold"
              >
                <Image
                  src="/github-mark.svg"
                  alt="github logo"
                  width="50"
                  height="50"
                  className="flex md:w-[10%] mx-auto"
                /></LinkPreview>

            </div>
            <Image
              src="/AirdropSOL.webp"
              alt="dummy image"
              width="500"
              height="500"
              className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto "
            />
            <div className="mt-4 md:mt-8">
              <div className="text-sm  md:text-xl"><LinkPreview
                url="https://sol-dapp-zeta.vercel.app"
                imageSrc="/AirdropSOL.webp"
                isStatic
                className="font-bold"
              >
                Airdrop SOL
              </LinkPreview>{" is an innovative website designed to facilitate the distribution of Solana (SOL) tokens through airdrops and free faucets. This platform empowers users, developers, and projects to easily send SOL to multiple wallet addresses, enhancing community engagement and participation in the Solana ecosystem."}

              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Web Crypto Wallet",
      value: "webcryptowallet",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Web Crypto Wallet</p>
          <div className="flex flex-col">

            <div>
              <div className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32" >{"Web Based "}<LinkPreview
                url="https://wallx-one.vercel.app"
                imageSrc="/WebCryptoWallet.webp"
                isStatic
                className="font-bold"
              >
                Crypto Wallet Creator

              </LinkPreview>
                <LinkPreview
                  url="https://github.com/rahulhingve/web-crypto-wallet"
                  imageSrc="/gitMeetHub.webp"
                  isStatic
                  className="font-bold"
                >
                  <Image
                    src="/github-mark.svg"
                    alt="github logo"
                    width="50"
                    height="50"
                    className="flex md:w-[10%] mx-auto"
                  /></LinkPreview>
              </div>
            </div>
            <Image
              src="/WebCryptoWallet.webp"
              alt="dummy image"
              width="500"
              height="500"
              className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto"
            />
            <div className="mt-4 md:mt-8">
              <div className="text-sm  md:text-xl"><LinkPreview
                url="https://wallx-one.vercel.app"
                imageSrc="/WebCryptoWallet.webp"
                isStatic
                className="font-bold"
              >
                Crypto Wallet Creator

              </LinkPreview>{" is a simple, web-based application designed to empower users to create and manage wallets for Bitcoin, Ethereum, and Solana. This platform aims to provide a secure and user-friendly experience for both beginners and experienced cryptocurrency enthusiasts."}

              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Medium Blog",
      value: "mediumblog",
      content: (
        <div className="md:w-full overflow-hidden relative md:h-full rounded-2xl p-10 text-xl md:text-4xl  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Medium Blog</p>
          <div className="flex flex-col">

            <div>
              <div className="max-w-[60%] sm:max-w-[50%]  text-lg md:text-3xl mt-4 md:mt-32" >{"Share your Blogs at "} <LinkPreview

                url="https://medium-blog-clone-taupe.vercel.app/signin"
                imageSrc="/MediumBlog.webp"
                isStatic
                className="font-bold"
              >
                Medium Blog
              </LinkPreview> {" by Rahul"}
              <LinkPreview
                url="https://github.com/rahulhingve/medium-blog-clone"
                imageSrc="/gitMeetHub.webp"
                isStatic
                className="font-bold"
              >
                <Image
                  src="/github-mark.svg"
                  alt="github logo"
                  width="50"
                  height="50"
                  className="flex md:w-[10%] mx-auto"
                /></LinkPreview>
              </div>
            </div>
            <Image
              src="/MediumBlog.webp"
              alt="dummy image"
              width="500"
              height="500"
              className="md:h-[50%] absolute  inset-x-4 md:inset-x-4 w-[40%] md:w-[50%] rounded-xl ml-auto"
            />
            <div className="mt-4 md:mt-8">
              <div className="text-sm  md:text-xl"><LinkPreview

url="https://medium-blog-clone-taupe.vercel.app/signin"
imageSrc="/MediumBlog.webp"
isStatic
className="font-bold"
>
Medium Blog
</LinkPreview>{" is a straightforward blogging platform designed for users to share their thoughts, stories, and expertise with a global audience. This user-friendly website empowers writers of all levels to create and publish content effortlessly, fostering a vibrant community of readers and contributors."}

              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id={id}  className="h-[30rem] md:h-[40rem] [perspective:1000px]  b flex flex-col max-w-5xl mx-auto w-full   justify-start mb-40 mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center items-center">
        Projects
      </h2>
      <Tabs tabs={tabs} />
    </div>





















  );
}


