import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "Đường dẫn",
        items: [
            {
                label: "Dịch vụ",
                href: "#dichVu"
            },
            {
                label: "Đánh giá",
                href: "#danhGia"
            }
        ]
    }
    // {
    //     title: "Company",
    //     items: [
    //         {
    //             label: "About",
    //             href: "https://github.com/christian-luntok/",
    //             target: "_blank"
    //         },
    //         {
    //             label: "Twitter",
    //             href: "https://github.com/christian-luntok/",
    //             target: "_blank"
    //         },
    //         {
    //             label: "Instagram",
    //             href: "https://github.com/christian-luntok/",
    //             target: "_blank"
    //         },
    //         {
    //             label: "Facebook",
    //             href: "https://github.com/christian-luntok/",
    //             target: "_blank"
    //         }
    //     ]
    // }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container pt-16">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-4">
                            <div className="footer--logo grid gap-6">
                                <Link
                                    className="text-xl font-medium flex items-center"
                                    href="/"
                                >
                                    <Image
                                        src="/logo.png"
                                        alt="logo"
                                        className="w-auto mr-2"
                                        height="50"
                                        width="50"
                                        priority
                                    />
                                    Taxi Quy Nhơn
                                </Link>

                                <div>
                                    <p className="m-0 py-1">
                                        Đặt xe nhanh chóng và dễ dàng
                                    </p>
                                    <p className="m-0 py-1">
                                        Lái xe chuyên nghiệp và thân thiện
                                    </p>
                                    <p className="m-0 py-1">
                                        Giá cả phải chăng và minh bạch
                                    </p>
                                    <p className="m-0 py-1">
                                        Dịch vụ taxi 24/7
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-4"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}

                                            <p className="font-bold text-base mb-1">
                                                Gọi ngay
                                            </p>
                                            <ButtonGroup alignment="left">
                                                <a
                                                    role="button"
                                                    href="tel:0949190369"
                                                    className="btn btn--secondary"
                                                >
                                                    <Icon icon="gg:phone" />
                                                    094.919.0369
                                                </a>
                                            </ButtonGroup>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0 text-center">
                        Liên hệ làm website uy tín, chất lượng.
                        <a
                            role="button"
                            href="tel:0979456501"
                            className="btn btn--primary ml-1"
                        >
                            <Icon icon="gg:phone" />
                            0979456501
                        </a>
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
