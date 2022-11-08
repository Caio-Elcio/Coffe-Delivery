import { Route, Routes } from "react-router-dom";
import { Default } from "./layouts/Default"
import { CompleteOrder } from "./pages/CompleteOrder";
import { Home } from "./pages/Home";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Default />} >
                <Route path="/" element={<Home />} />
                <Route path="/completeOrder" element={<CompleteOrder />} />
                <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
            </Route >
        </Routes >
    );
}