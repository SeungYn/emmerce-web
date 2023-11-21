import CartTable from '@/components/cart/CartTable/CartTable';
import MaxXLContainer from '@/components/common/container/MaxXLContainer';
import { cartItems, items } from '@/util/mock/data/item';

export default function page() {
  return (
    <section>
      <MaxXLContainer>
        {/* 장바구니, 결제, 결제확인 네비게이션 부분 */}
        <div>
          <h2>
            <span>아이콘</span>
            <p>장바구니</p>
          </h2>

          <ul>
            <li>
              <span>01</span>
              <span>장바구니</span>
            </li>
            <li>
              <span>02</span>
              <span>주문/결제</span>
            </li>
            <li>
              <span>03</span>
              <span>주문완료</span>
            </li>
          </ul>
        </div>

        <CartTable cartItemList={cartItems} />
      </MaxXLContainer>
    </section>
  );
}
