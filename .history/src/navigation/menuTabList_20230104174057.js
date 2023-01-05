import Home from "../screens/Home/Home";
import Friends from "../screens/Friends/Friends";
import MyPosts from "../screens/My Posts/MyPosts";
import Profile from "../screens/Profile/Profile";
import Icons from "../themes/Icons";

const MenuTabList = [
    {
        name: 'Home',
        component: Home,
        tittle: 'Home',
        iconActive: Icons.isHomeFill,
        iconUnActive: Icons.isHome,
    },
    {
        name: 'Profile',
        component: Profile,
        title: 'Profile',
        iconActive: Icons.isProfileFill,
        
    }
]

export {MenuTabList};