import { Hono } from "hono";
import { homeRouter } from "./v1/home-page";
import { agentRouter } from "./v1/agent";

const apiRouter = new Hono();

// Mount v1 routes
apiRouter.route("/home", homeRouter);
apiRouter.route("/agent", agentRouter);

export { apiRouter };
