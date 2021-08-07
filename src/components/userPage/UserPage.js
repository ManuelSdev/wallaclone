import UserNavBar from "./UserNavBar"
import './UserPage.css'
import { Switch, Route, Redirect, Router } from 'react-router-dom';
import { UserProfilePage, UserAdsPage, UserFavoritesPage, UserRatingsPage, UserStatisticsPage, UserChatPage } from "./sections"
const UserPage = () => {



    return (
        <div className="UserPage">
            PAGINA DE USUARIO
            <div className="user-layout">
                <UserNavBar></UserNavBar>
                <Switch>
                    <Route path="/user/profile" component={UserProfilePage}></Route>
                    <Route path="/user/ads" component={UserAdsPage}></Route>
                    <Route path="/user/chat" component={UserChatPage}></Route>
                    <Route path="/user/favs" component={UserFavoritesPage}></Route>
                    <Route path="/user/ratings" component={UserRatingsPage}></Route>
                    <Route path="/user/statistics" component={UserStatisticsPage}></Route>
                    <Route path="/user" component={UserProfilePage}></Route>

                </Switch>
            </div>

        </div>
    )
}

export default UserPage