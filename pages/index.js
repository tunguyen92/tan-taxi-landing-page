import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Taxi Quy Nhơn - Dịch vụ taxi giá rẻ 🚕"
                description="Dịch vụ taxi giá rẻ ở Quy Nhơn. Tin cậy, nhanh chóng, tiện lợi."
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Dịch vụ */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="dichVu" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Dịch vụ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Lái Xe Chuyên Nghiệp
                                <br />
                                Dịch Vụ Tận Tâm
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Chúng tôi tự hào là đội ngũ lái xe có kinh
                                    nghiệm và tận tâm nhất. Với chúng tôi, sự an
                                    toàn và thoải mái của bạn là ưu tiên hàng
                                    đầu.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Các dịch vụ</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Dịch vụ của chúng tôi
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Chúng tôi sẵn sàng phục vụ bạn trên mọi nẻo
                                    đường
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-full mx-auto mt-24 md:grid-cols-3">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            className="w-2/3 mx-auto"
                                            src="/s1.svg"
                                            alt="Taxi"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Taxi
                                        </CardHeader>
                                        <p>
                                            Chúng tôi cam kết mang đến cho bạn
                                            trải nghiệm di chuyển thoải mái và
                                            tiện lợi nhất.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            className="w-2/3 mx-auto"
                                            src="/s2.svg"
                                            alt="Package"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Chở hàng
                                        </CardHeader>
                                        <p>
                                            Hàng hóa đảm bảo an toàn, đúng địa
                                            chỉ nhận hàng, nhanh chóng, tiện
                                            lợi.
                                        </p>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            className="w-2/3 mx-auto"
                                            src="/s3.svg"
                                            alt="24/7"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            24/7
                                        </CardHeader>
                                        <p>
                                            Dịch vụ taxi nhanh chóng 24/7. Chúng
                                            tôi luôn sẵn sàng phục vụ bạn.
                                        </p>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Đánh giá */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="danhGia" className="benefits">
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Đánh giá</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                Mọi người yêu mến chúng tôi
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Accordions */}
                    {/* <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>FAQ</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Got some burning questions about NutriTrack?{" "}
                                <br></br>
                                <br></br>No worries! We&apos;ve got the answers
                                you need:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer> */}
                </SectionContainer>
            </div>
        </Layout>
    );
}
