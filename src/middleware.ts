import { chain } from "./middlewares/chain";
import { withAuthMiddleware } from "./middlewares/withRouteMiddleware";
import { withApiMiddleware } from "./middlewares/withApiMiddleware";

export default chain([withAuthMiddleware, withApiMiddleware]);

export const config = {
  matcher: ["/admin/:path*"],
};
