import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/theme.css'; // Styling for the navbar and theme variables
import '../utils/icons.js'; // Potentially for side effects or global icon registration
import { icons } from "../utils/icons.js"; // Importing icon components

const Navbar = () => {
    // useMemo for menuItems: Ensures this array is only created once
    // and re-created only if its dependencies change (none here, so effectively once).
    // This prevents unnecessary re-renders of child components if menuItems were inline.
    const menuItems = useMemo(() => [
        { id: 'dashboard', icon: icons.FaRegChartBar(), label: 'Dashboard', path: '/', color: 'var(--gradient-bg-first)' },
        { id: 'boats', icon: icons.IoBoatOutline(), label: 'Boats', path: '/boats', color: 'var(--gradient-bg-second)' },
        { id: 'ghaats', icon: icons.MdOutlineWaves(), label: 'Ghaats', path: '/ghaats', color: 'var(--gradient-bg-third)' },
        { id: 'districts', icon: icons.IoLocationOutline(), label: 'Districts', path: '/districts', color: 'var(--gradient-bg-fourth)' },
        { id: 'lifejackets', icon: icons.LuShield(), label: 'Life Jackets', path: '/life-jackets', color: 'var(--gradient-bg-fifth)' },
        { id: 'inspection', icon: icons.BsClipboardCheck(), label: 'Inspection', path: '/inspection', color: 'var(--gradient-bg-sixth)' }
    ], []);

    // useNavigate hook: Provides a function to programmatically navigate.
    const navigate = useNavigate();
    // useLocation hook: Provides the current location object,
    // useful for getting the current URL path.
    const location = useLocation();

    // useState for activeItem: Manages which navigation tab is currently highlighted.
    // Initializing state with a function:
    // This function runs only once during the initial render.
    // It directly calculates the active tab based on the current URL
    // (location.pathname). This prevents the "flash" to the default 'dashboard' tab
    // on page refresh, as the correct tab is active from the very first render.
    const [activeItem, setActiveItem] = useState(() => {
        const currentPath = location.pathname;
        const currentMenuItem = menuItems.find(item => item.path === currentPath);
        if (currentMenuItem) {
            return currentMenuItem.id;
        }
        // Fallback: If no matching menu item is found for the path (e.g., a 404 handled by App.js),
        // default to 'dashboard' as the active tab. The App.js route takes care of the content.
        return 'dashboard';
    });

    // useEffect hook: Handles updates to the active tab when the URL changes
    // due to internal navigation (e.g., clicking a link).
    // It's crucial for keeping the Navbar's highlight in sync with the browser's URL.
    useEffect(() => {
        const currentPath = location.pathname;
        const currentMenuItem = menuItems.find(item => item.path === currentPath);

        // Only update if the found item is different from the current activeItem
        // to prevent unnecessary re-renders.
        if (currentMenuItem && activeItem !== currentMenuItem.id) {
            setActiveItem(currentMenuItem.id);
        }
        // Specific handling for the root path to ensure dashboard is active.
        else if (currentPath === '/' && activeItem !== 'dashboard') {
            setActiveItem('dashboard');
        }
    }, [location.pathname, menuItems, activeItem]); // Dependencies:
    // - location.pathname: Reruns when the URL changes.
    // - menuItems: Reruns if the menu configuration changes (though static here).
    // - activeItem: Added for explicit dependency, though less critical due to other deps.

    // handleItemClick: Event handler for when a navigation item is clicked.
    const handleItemClick = (itemId, path) => {
        // Immediately update the active state for a snappier UI response.
        setActiveItem(itemId);
        // Use navigate to change the URL, triggering a re-render of the relevant page component.
        navigate(path);
    };

    return (
        <div className="navbar">
            <ul className="nav-items">
                {/* Map through menuItems to render each navigation link. */}
                {menuItems.map((item) => (
                    <li
                        key={item.id}
                        // Conditionally apply 'active' class for styling.
                        className={activeItem === item.id ? 'active' : ''}
                        // Attach the click handler.
                        onClick={() => handleItemClick(item.id, item.path)}
                        // Apply dynamic background color based on active state.
                        style={{
                            background: activeItem === item.id ? item.color : 'transparent',
                        }}
                    >
                        {/* Display icon and label for each item. */}
                        <span className="icon" style={{ margin: '0 4px'}}>{item.icon}</span>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;