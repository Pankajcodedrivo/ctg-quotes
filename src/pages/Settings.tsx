import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import DashboardLeft from "../components/DashboardLeft";
import DashboardFooter from "../components/DashboardFooter";
import SettingsBox from "../components/SettingsBox";
import rightArrow from "../assets/images/right-arrow.svg"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut, setUser } from "../store/authSlice";
import { confirmDeleteAccount } from "../utils/confirmDeleteModal";
import { deleteAccount, updateProfile } from "../service/user.api";
import { useSelector } from "react-redux";

const Settings = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state: any) => state.auth.user);
    const [notifications, setNotifications] = useState({
    emailNotification: user?.emailNotification ?? true,
    textNotification: user?.textNotification ?? true,
    pushNotification: user?.pushNotification ?? true,
    });
    const [communicationPref, setCommunicationPref] = useState(
    user?.communicationPref ?? "email"
    );
    // Logout handler
        function logoutHandler() {
            dispatch(logOut());
            localStorage.clear();
            navigate("/login");
        }
    // Delete account
        const handleDeleteAccount = async () => {
            const confirmed = await confirmDeleteAccount({
            title: "Delete Account",
            description: "Are you sure you want to delete your account?",
            });
        if (!confirmed) return;
        try {
        await deleteAccount();
            dispatch(logOut());
            localStorage.clear();
            navigate("/login");
        } catch (error) {
            console.error("Account deletion failed", error);
        }
    }
    // Handle communication pref
    const handleCommunicationPrefChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const value = e.target.value;
        // optimistic update
        setCommunicationPref(value);
        try {
            const response = await updateProfile({
            communicationPref: value,
            });
            // sync redux user
            dispatch(setUser(response?.data?.user));
        } catch (error) {
            console.error("Failed to update communication preference", error);
            // rollback on failure
            setCommunicationPref(user?.communicationPref ?? "email");
        }
    };
    // Handle notification settings
    const handleNotificationToggle = async (
    key: "emailNotification" | "textNotification" | "pushNotification",
    value: boolean
    ) => {
    // optimistic UI update
    setNotifications((prev) => ({
        ...prev,
        [key]: value,
    }));
    try {
        const response = await updateProfile({
        [key]: value,
        });
        // sync redux user
        dispatch(setUser(response?.data?.user));
    } catch (error) {
        console.error("Failed to update notification setting", error);
        // rollback on failure (important)
        setNotifications((prev) => ({
        ...prev,
        [key]: !value,
        }));
    }
    };
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>Settings</h3>
                        <p className="font-16">The settings page allows users to manage notifications, communication preferences, language, theme, and quick links. This page is strictly for user preferences, not visibility, mode selection, or profile details.</p>
                    </div>
                    <div className="shadow-box mb-4">
                        <div className="settings-hdr">
                            <h4>Notifications</h4>
                            <p>Use the switches below to control how you want to stay updated.</p>
                        </div>
                        <div className="settings-box-otr">
                            <SettingsBox
                            title="Email Notifications"
                            desc="Receive updates about quotes and uploaded documents"
                            value={notifications.emailNotification}
                            onToggle={(value) => handleNotificationToggle("emailNotification", value)}
                            />

                            <SettingsBox
                            title="Text Notifications"
                            desc="Get SMS alerts for new quotes or document reminders"
                            value={notifications.textNotification}
                            onToggle={(value) => handleNotificationToggle("textNotification", value)}
                            />

                            <SettingsBox
                            title="Push Notifications"
                            desc="Notified in app notification"
                            value={notifications.pushNotification}
                            onToggle={(value) => handleNotificationToggle("pushNotification", value)}
                            />
                        </div>
                    </div>
                    <div className="shadow-box mb-4">
                        <div className="settings-hdr">
                            <h4>Communication Preferences</h4>
                            <p>Choose how and when our team can reach you.</p>
                        </div>
                        <div className="inner-shadow-box mb-4">
                            <p>Preferred Contact Method</p>
                            <div className="form-group mb-0 w-50">
                                <label className="form-label float">Contact Method</label>
                                <select 
                                    value={communicationPref}
                                    onChange={handleCommunicationPrefChange}
                                    className="form-control">
                                    <option value="email">Email</option>
                                    <option value="phone">Phone</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-box mb-4">
                        <div className="settings-hdr">
                            <h4>Quick Links</h4>
                            <p>Access key tools quickly from here.</p>
                        </div>
                        <div className="inner-shadow-box pd-30 mb-4">
                            <ul className="settings-list">
                                <li>
                                    <Link to="/security">Manage Account Security</Link>
                                </li>
                                <li>
                                    <Link to="/my-documents">Manage Documents</Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={logoutHandler}>Log Out </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="shadow-box">
                        <div className="settings-hdr">
                            <h5>Delete Account</h5>
                            <p>You can delete your account anytime, but please note this action is permanent. All your information will be erased.</p>
                        </div>
                        <button type="button" className="btn btn-secondary style2 mb-w-100" onClick={handleDeleteAccount}>Manage Account <span><img src={rightArrow} alt="" /></span></button>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Settings;
