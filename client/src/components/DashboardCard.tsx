import type { ReactNode } from "react";

interface DashboardCardProps {
    children?: ReactNode;
    className?: string;
}

function DashboardCard({ children = "", className = "" }: DashboardCardProps) {
    return <div className={`flex ${className}`}>{children}</div>;
}

export default DashboardCard;
