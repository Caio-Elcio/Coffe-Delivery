import { Route, Routes } from "react-router-dom";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";
import { CompleteOrder } from "./pages/CompleteOrder";
import { Home } from "./pages/Home";
import { Default } from "./layouts/Default"

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