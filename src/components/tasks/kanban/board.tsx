import {
    DndContext,
    DragEndEvent,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";

type Props = {
    onDragEnd: (event: DragEndEvent) => void;
};

export const KanbanBoardContainer = ({ children }: React.PropsWithChildren) => {
    return (
        <div
            style={{
                width: "calc(100% + 56px)",
                height: "calc(100vh - 64px)",
                display: "flex",
                justifyContent: "column",
                margin: "-32px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    padding: "32px",
                    overflow: "scroll",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export const KanbanBoard = ({
    children,
    onDragEnd,
}: React.PropsWithChildren<Props>) => {
    const mouseSensors = useSensor(MouseSensor, {
        activationConstraint: {
            distance: 5,
        },
    });
    const touchSensors = useSensor(TouchSensor, {
        activationConstraint: {
            distance: 5,
        },
    });

    const sensors = useSensors(mouseSensors, touchSensors);

    return (
        <DndContext onDragEnd={onDragEnd} sensors={sensors}>
            {children}
        </DndContext>
    );
};
