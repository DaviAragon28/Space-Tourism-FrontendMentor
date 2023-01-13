import Image from "next/legacy/image";
import Link from "next/link";
import ButtonExplore from "../components/ButtonExplore/ButtonExplore";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import { fontBarlow, fontBellefair } from "../font/font";


export default function HomePage() {
    return (
        <>
            <div>
                <div className=" fixed -z-50 w-screen h-screen md:hidden">
                    <Image
                        className=""
                        layout="fill"
                        src='/assets/home/background-home-mobile.jpg'
                        alt="bg"
                        objectFit="cover"
                    />

                </div>
                <div className="hidden fixed -z-50 w-screen h-screen md:block">
                    <Image
                        className=""
                        layout="fill"
                        src='/assets/home/background-home-tablet.jpg'
                        alt="bg"
                        objectFit="cover"
                    />
                </div>
                <div className="hidden fixed -z-50 w-screen h-screen lg:block lg:w-full lg:h-full">
                    <Image
                        className=""
                        layout="fill"
                        src='/assets/home/background-home-desktop.jpg'
                        alt="bg"
                        objectFit="cover"
                    />
                </div>
                <div className="lg:flex lg:items-end lg:pt-10 justify-around ">
                    <div className={` flex flex-col gap-4 px-3 pt-28 text-center md:pt-56 md:gap-8 lg:gap-4 lg:text-left ${fontBarlow.className}`}>
                        <h5 className={`text-lightBlue text-3xl`}>SO, YOU WANT TO TRAVEL TO <span className={`text-white text-8xl block pt-5 md:text-9xl ${fontBellefair.className} `}>SPACE</span></h5>
                        <p className="text-base text-lightBlue md:max-w-md md:mx-auto md:text-xl">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                    </div>
                    <ButtonExplore />
                </div>
                {/* <Menu /> */}
            </div>
        </>
    )
}