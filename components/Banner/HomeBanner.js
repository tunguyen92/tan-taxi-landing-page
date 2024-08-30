import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { Button, ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Icon } from "@iconify/react";
import { phoneNumber, phoneNumberHref } from "@utils/common";
import Image from "next/image";

export const HomeBanner = () => {
    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                {/* Appear First */}
                <MotionBTTContainer transition={{ delay: 0.2, duration: 0.5 }}>
                    <BadgeGroup alignment="center">
                        <BadgeMessage>Taxi Quy Nhơn!</BadgeMessage>
                        <BadgeIcon icon="twemoji:oncoming-taxi" />
                    </BadgeGroup>
                </MotionBTTContainer>
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        Thời gian đợi gặp lái xe chỉ trong vài phút!
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            Với dịch vụ của chúng tôi, bạn có thể đặt xe một
                            cách dễ dàng và nhanh chóng chỉ trong vài phút.
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            <Button href="#dichVu">Dịch vụ</Button>
                            <a
                                role="button"
                                href={`tel:${phoneNumberHref}`}
                                className="btn btn--secondary"
                            >
                                <Icon icon="gg:phone" />
                                {phoneNumber}
                            </a>
                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image">
                        <Image
                            src="/car-banner.png"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            className="mx-auto"
                            style={{
                                objectFit: "cover"
                            }}
                        />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
