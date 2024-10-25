import { Router } from "express";
import * as rh from "../request_handlers/testhandler.js"
import {middleware} from "../middlewares/test.mw.js"

const router = Router();

router.route("/api1").post(middleware,rh.test);
router.route("/write").post(rh.write);
router.route("/read").get(rh.read);
router.route("/update").put(rh.update);
router.route("/delete").delete(rh.del);

export default router;