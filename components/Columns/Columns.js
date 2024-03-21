import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ColumnData = [
    {
        id: uuid(),
        title: "Thanh Tú",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Dịch vụ taxi này rất chuyên nghiệp và thuận tiện. Tài xế luôn lịch sự và nhiệt tình. Xe luôn sạch sẽ và tiện nghi. Tôi cảm thấy an tâm khi sử dụng dịch vụ của họ và sẽ chắc chắn tiếp tục lựa chọn vào lần sau."
    },
    {
        id: uuid(),
        title: "Trâm Nguyễn",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Tôi rất hài lòng với dịch vụ taxi này vì sự đáng tin cậy của họ. Luôn có xe sẵn sàng khi tôi cần, và tôi không bao giờ phải chờ đợi lâu. Giá cả cũng hợp lý và không có phí ẩn. Tôi đã sử dụng dịch vụ này nhiều lần và không hề gặp vấn đề gì đáng lo ngại."
    },
    {
        id: uuid(),
        title: "Bảo Châu",
        icon: "carbon:user-avatar-filled-alt",
        content:
            "Điều tôi thích nhất ở dịch vụ taxi này là tính tiện ích và linh hoạt. Tôi có thể dễ dàng đặt xe nhanh chóng, tài xế cũng thân thiện. Hơn nữa, họ cũng chấp nhận thanh toán qua nhiều phương thức khác nhau, từ tiền mặt đến chuyển khoản. Điều này thực sự tiện lợi cho tôi."
    }
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" />
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
