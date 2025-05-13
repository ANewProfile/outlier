import DashboardCard from "../components/DashboardCard";

function Dashboard() {
    return (
        <div className="flex flex-col justify-center items-center">
            <DashboardCard>Task Breakdown</DashboardCard>
            <DashboardCard>Focus Timer</DashboardCard>
            <DashboardCard>Emotional Check-In</DashboardCard>
        </div>
    );
}

export default Dashboard;
