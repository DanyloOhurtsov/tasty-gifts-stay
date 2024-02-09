// Dashboard
import UpcomingEvents from "./home/UpcomingEvents";
import DealsChart from "./home/DealsChart";
import DashboardTotalCountCard from "./home/DashboardTotalCountCard";
import DashboardLatestActivities from "./home/DashboardLatestActivities";
// Skeleton
import UpcomingEventsSkeleton from "./skeleton/upcoming-events";
import AccordionHeaderSkeleton from "./skeleton/accordion-header";
import KanbanColumnSkeleton from "./skeleton/kanban";
import LatestActivitiesSkeleton from "./skeleton/latest-activities";
import ProjectCardSkeleton from "./skeleton/project-card";
// Custom Reuse elements
import SelectOptionWithAvatar from "./SelectOptionWithAvatar";
import CustomAvatar from "./CustomAvatar";
import { ContactStatusTag } from "./tags/ContactStatusTag";
import { Text } from "./text";
import { TextIcon, TextIconSvg } from "./TextIcon";
import { Accordion } from "./tasks/Accordion";
import { UserTag } from "./tags/UserTag";
// Kanban
import KanbanColumn from "./tasks/kanban/column";
import { KanbanBoardContainer, KanbanBoard } from "./tasks/kanban/board";
import KanbanItem from "./tasks/kanban/item";
import ProjectCard, { ProjectCardMemo } from "./tasks/kanban/card";
import { KanbanAddCardButton } from "./tasks/kanban/KanbanAddCardButton";
// Form
import { DescriptionForm } from "./tasks/form/DescriptionForm";
import {
    DescriptionHeader,
    DueDateHeader,
    UsersHeader,
} from "./tasks/form/DescriptionHeader";
import { DueDateForm } from "./tasks/form/DueDateForm";
import { StageForm } from "./tasks/form/StageForm";
import { TitleForm } from "./tasks/form/TitleForm";
import { UsersForm } from "./tasks/form/UsersForm";

// !EXPORT
export {
    // Dashboard
    UpcomingEvents,
    DealsChart,
    DashboardTotalCountCard,
    DashboardLatestActivities,
    // Skeleton
    UpcomingEventsSkeleton,
    AccordionHeaderSkeleton,
    KanbanColumnSkeleton,
    LatestActivitiesSkeleton,
    ProjectCardSkeleton,
    // Custom Reuse elements
    SelectOptionWithAvatar,
    CustomAvatar,
    ContactStatusTag,
    Text,
    TextIcon,
    TextIconSvg,
    Accordion,
    UserTag,
    // Kanban
    KanbanBoardContainer,
    KanbanBoard,
    KanbanColumn,
    KanbanItem,
    ProjectCard,
    ProjectCardMemo,
    KanbanAddCardButton,
    // Form
    DescriptionForm,
    DescriptionHeader,
    DueDateForm,
    DueDateHeader,
    StageForm,
    TitleForm,
    UsersForm,
    UsersHeader,
};
