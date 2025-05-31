import NF from "../pages/NF.jsx";
import Home from "../pages/Home.jsx";
import Authorize from "../pages/Authorize.jsx";
import Profile from "../pages/Profile.jsx";
import Catalog from "../pages/Catalog.jsx";

export const publicRoutes = [
    {path: '/', Element: Home},
    {path: '/profile', Element: Profile},
    {path: '/auth', Element: Authorize},
    {path: '/marketplace', Element: Catalog},
    {path: '*', Element: NF}
]
