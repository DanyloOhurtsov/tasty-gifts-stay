import { CustomAvatar, TextIcon, Text } from "@/components";
import { User } from "@/graphql/schema.types";
import { getDateColor } from "@/utilities";
import {
    ClockCircleOutlined,
    DeleteOutlined,
    EyeOutlined,
    MoreOutlined,
} from "@ant-design/icons";
import { useDelete, useNavigation } from "@refinedev/core";
import {
    Button,
    Card,
    ConfigProvider,
    Dropdown,
    MenuProps,
    Space,
    Tag,
    Tooltip,
    theme,
} from "antd";
import dayjs from "dayjs";
import { memo, useMemo } from "react";

type Props = {
    id: string;
    title: string;
    updatedAt: string;
    dueDate?: string;
    users?: {
        id: string;
        name: string;
        avatarUrl?: User["avatarUrl"];
    }[];
};

const ProjectCard = ({ id, title, dueDate, users }: Props) => {
    const { token } = theme.useToken();

    const { edit } = useNavigation();
    const { mutate: deleteTask } = useDelete();

    const dropdownItems = useMemo(() => {
        const dropdownItems: MenuProps["items"] = [
            {
                label: "View card",
                key: 1,
                icon: <EyeOutlined />,
                onClick: () => {
                    edit("tasks", id, "replace");
                },
            },
            {
                danger: true,
                label: "Delete card",
                key: 2,
                icon: <DeleteOutlined />,
                onClick: () => {
                    deleteTask({
                        resource: "tasks",
                        id,
                        meta: {
                            operation: "task",
                        },
                    });
                },
            },
        ];

        // !RETURN
        return dropdownItems;
    }, []);

    const dueDateOptions = useMemo(() => {
        if (!dueDate) return null;

        const date = dayjs(dueDate);

        // !RETURN
        return {
            color: getDateColor({ date: dueDate }) as string,
            text: date.format("MMM DD"),
        };
    }, [dueDate]);

    // !RETURN
    return (
        <ConfigProvider
            theme={{
                components: {
                    Tag: {
                        colorText: token.colorTextSecondary,
                    },
                    Card: {
                        headerBg: "transparent",
                    },
                },
            }}
        >
            <Card
                size="small"
                title={<Text ellipsis={{ tooltip: title }}>{title}</Text>}
                extra={
                    <Dropdown
                        trigger={["click"]}
                        menu={{
                            items: dropdownItems,
                        }}
                        placement="bottom"
                        arrow={{ pointAtCenter: true }}
                    >
                        <Button
                            type="text"
                            shape="circle"
                            icon={
                                <MoreOutlined
                                    style={{
                                        transform: "rotate(90deg)",
                                    }}
                                />
                            }
                            onPointerDown={(event) => {
                                event.stopPropagation();
                            }}
                            onClick={(event) => {
                                event.stopPropagation();
                            }}
                        />
                    </Dropdown>
                }
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <TextIcon
                        style={{
                            marginRight: "4px",
                        }}
                    />
                    {dueDateOptions && (
                        <Tag
                            icon={
                                <ClockCircleOutlined
                                    style={{
                                        fontSize: "12px",
                                    }}
                                />
                            }
                            style={{
                                padding: "0 4px",
                                marginInlineEnd: "0",
                                backgroundColor:
                                    dueDateOptions.color === "default"
                                        ? "transparent"
                                        : "unset",
                            }}
                            color={dueDateOptions.color}
                            bordered={dueDateOptions.color !== "default"}
                        >
                            {dueDateOptions.text}
                        </Tag>
                    )}
                    {!!users?.length && (
                        <Space
                            size={4}
                            wrap
                            direction="horizontal"
                            align="center"
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginLeft: "auto",
                                marginRight: 0,
                            }}
                        >
                            {users.map((user) => (
                                <Tooltip key={user.id}>
                                    <CustomAvatar
                                        name={user.name}
                                        src={user.avatarUrl}
                                    />
                                </Tooltip>
                            ))}
                        </Space>
                    )}
                </div>
            </Card>
        </ConfigProvider>
    );
};

export default ProjectCard;

export const ProjectCardMemo = memo(ProjectCard, (prev, next) => {
    return (
        prev.id === next.id &&
        prev.title === next.title &&
        prev.dueDate === next.dueDate &&
        prev.users?.length === next.users?.length &&
        prev.updatedAt === next.updatedAt
    );
});
