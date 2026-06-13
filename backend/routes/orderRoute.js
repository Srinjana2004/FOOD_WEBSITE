import express from "express"
import authMiddleware from "../middleware/auth.js"
import { placeOrder,verifyOrder,userOrders,listOrders,updateStatus}from "../controllers/orderController.js"
// import orderModel from "../models/orderModel.js";


const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.post("/verify", verifyOrder);
orderRouter.get("/userorders", authMiddleware, userOrders);
orderRouter.get("/list", listOrders);
orderRouter.post("/status", updateStatus);
// orderRouter.get("/cleanup", async (req, res) => {
//     await orderModel.deleteMany({ items: { $size: 0 } });
//     res.json({ success: true, message: "Cleaned up" });
// });
export default orderRouter;