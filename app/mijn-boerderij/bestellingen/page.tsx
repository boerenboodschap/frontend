import CreateOrder from "@/components/orders/CreateOrder";
import OrderList from "@/components/orders/OrderList";

export default function OrderManagement() {
  return (
    <div className="flex flex-col gap-6">
      <div className="text-xl">Beheer hier je bestellingen</div>
      <CreateOrder />
      <OrderList />
    </div>
  );
}
