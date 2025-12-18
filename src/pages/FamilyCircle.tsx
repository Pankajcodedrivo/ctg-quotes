import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";

const FamilyCircle = () => {
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader />
            <div className="dashboard-body">
                <DashboardLeft />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>Family Circle</h3>
                        <p>View and manage your household members below</p>
                    </div>
                    <div className="family-circle-top">
                        
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default FamilyCircle;
