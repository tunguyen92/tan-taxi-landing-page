import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import { phoneNumber, phoneNumberHref } from "@utils/common";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <Link
                        // className="flex items-center gap-1 lg:gap-2 text-xl font-medium lg:font-semibold lg:text-3xl"

                        href="/"
                    >
                        <Image
                            src="/logo.png"
                            alt="logo"
                            className="w-auto"
                            width="35"
                            height="35"
                            priority
                        />
                    </Link>
                    <h1 className="mb-0 text-xl font-medium lg:font-semibold lg:text-3xl">
                        Taxi Quy Nhơn
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    <Nav />
                    <ButtonGroup className="hidden md:block">
                        <a
                            role="button"
                            href={`tel:${phoneNumberHref}`}
                            className="btn btn--secondary ml-4"
                        >
                            <Icon icon="gg:phone" />
                            {phoneNumber}
                        </a>
                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
