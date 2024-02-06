import UpcomingEvents from "./home/UpcomingEvents";
import DealsChart from "./home/DealsChart";
import UpcomingEventsSkeleton from "./skeleton/upcoming-events";
import AccordionHeaderSkeleton from "./skeleton/accordion-header";
import KanbanColumnSkeleton from "./skeleton/kanban";
import LatestActivitiesSkeleton from "./skeleton/latest-activities";
import ProjectCardSkeleton from "./skeleton/project-card";
import DashboardTotalCountCard from "./home/DashboardTotalCountCard";
import DashboardLatestActivities from "./home/DashboardLatestActivities";
import SelectOptionWithAvatar from "./SelectOptionWithAvatar";
import CustomAvatar from "./CustomAvatar";
import { ContactStatusTag } from "./tags/ContactStatusTag";
import { Text } from "./text";
import KanbanColumn from "./tasks/kanban/column";
import { KanbanBoardContainer, KanbanBoard } from "./tasks/kanban/board";
import KanbanItem from "./tasks/kanban/item";

export {
    // Charts
    UpcomingEvents,
    DealsChart,
    // Skeleton
    UpcomingEventsSkeleton,
    AccordionHeaderSkeleton,
    KanbanColumnSkeleton,
    LatestActivitiesSkeleton,
    ProjectCardSkeleton,
    // Dashboard
    DashboardTotalCountCard,
    DashboardLatestActivities,
    // Custom Reuse elements
    SelectOptionWithAvatar,
    CustomAvatar,
    ContactStatusTag,
    Text,
    // Kanban
    KanbanBoardContainer,
    KanbanBoard,
    KanbanColumn,
    KanbanItem,
};
