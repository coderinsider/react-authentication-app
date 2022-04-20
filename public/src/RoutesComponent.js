import {
   Routes,
   Route  
} from "react-router-dom";
import UserInfoMain from './components/pages/userinfo/UserInfoMain';
import LoginPanel from './components/pages/LoginPanel';
import { SignUpPanel } from './components/pages/SignUpPanel';
import { 
   HomePage, LoginPage,
   UserListsPage, EachUserId, UserNewPage 
} from './components/pages/StaticPageLists';
export const RoutesComponent = () => {
   return (
      <Routes>
         <Route path="userinfo" element={<UserInfoMain />} />
         <Route index element={<HomePage />} />
         <Route path="login" element={<LoginPanel />} />
         <Route path="sign-up" element={<SignUpPanel />} />
         <Route path="user" element={<UserListsPage />} />
         <Route path="user/:userId" element={<EachUserId />} />
         <Route path="user/new" element={<UserNewPage />} />            
      </Routes>
   )
}