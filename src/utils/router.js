import { createPage } from "../user-page/user";
import { createFriends } from "../frends-page/friends"
import { createMessages } from "../messages";

export const switchRoutes = () => {
   switch (window.location.pathname) {
      case '/':
         createPage()
         break
      case '/friends':
         createFriends()
         break
      case '/messages':
         createMessages()
         break
   }
}