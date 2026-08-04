import Button from "@/shared/ui/components/buttons/button";
import { ShoppingBagIcon } from "@phosphor-icons/react";

const CartBtn = () => {
  return (
    <Button size="icon" variant="ghost">
      <ShoppingBagIcon className="size-5" />
    </Button>
  )
}

export default CartBtn