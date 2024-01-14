import CreateOrder from "@/components/orders/CreateOrder";
import OrderList from "@/components/orders/OrderList";

export default function OrderManagement() {
    return (
      <div>
        <div>Beheer hier je bestellingen</div>
        <CreateOrder />
        <OrderList />
      </div>
    );
  }
  