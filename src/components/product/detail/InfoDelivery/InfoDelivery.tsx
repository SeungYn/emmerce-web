import InformationTable from '@/components/common/InformationTable/InformationTable';

export default function InfoDelivery() {
  return (
    <div>
      <InformationTable>
        <InformationTable.Header title='배송안내' />
        <InformationTable.Body>
          <InformationTable.FirstColumn>
            <p>공급업체</p>
          </InformationTable.FirstColumn>
          <InformationTable.SecondColumn>
            <p>미정</p>
          </InformationTable.SecondColumn>
          <InformationTable.FirstColumn>
            <p>배송비</p>
          </InformationTable.FirstColumn>
          <InformationTable.SecondColumn>
            <p>3,000원</p>
            <p>제주도의 경우 추가배송비 4,500원, 전국</p>
          </InformationTable.SecondColumn>
          <InformationTable.FirstColumn>
            <p>배송정보</p>
          </InformationTable.FirstColumn>
          <InformationTable.SecondColumn>
            <p>미정</p>
          </InformationTable.SecondColumn>
        </InformationTable.Body>
      </InformationTable>

      <InformationTable>
        <InformationTable.Header title='취소/반품/교환 안내' />
        <InformationTable.Body>
          <InformationTable.FirstColumn>
            <p>주문 취소</p>
          </InformationTable.FirstColumn>
          <InformationTable.SecondColumn>
            <p>주문취소는 입금대기/입금완료에서 가능합니다.</p>
            <p>
              가구 등 주문제작상품의 경우에는 상품준비중 단계부터 불가능하며
              상품 수령 후, 반품 신청을 하실 수 있습니다.
            </p>
          </InformationTable.SecondColumn>
          <InformationTable.FirstColumn>
            <p>반품/교환 배송비 안내</p>
          </InformationTable.FirstColumn>
          <InformationTable.SecondColumn>
            <p>반품/교환 배송비는 고객 변심의 경우에만 발생됩니다.</p>
            <p>구매 후 반품/교환 시 예상금액과 차이가 있을 수 있습니다.</p>
          </InformationTable.SecondColumn>
          <InformationTable.FirstColumn>
            <p>반품/교환안내</p>
          </InformationTable.FirstColumn>
          <InformationTable.SecondColumn>
            <p>
              반품/교환은 상품 수령일 7일 이내에 신청해주셔야 하며 단순
              고객변심으로 인한 왕복 배송비는 고객님께서 부담하셔야 합니다.
            </p>
            <p>
              표시광고와 상이하여 상품에 하자가 있는 경우 상품수령 후 3개월
              이내, 해당사실을 안(알 수 있었던)날로부터 30일 이내에 교환/반품을
              신청을 할 수 있습니다.
            </p>
            <p>반품/교환 시 제품 원형 그대로 보내 주셔야 가능 합니다.</p>
            <p>반품/교환은 꼭 승인과정을 거쳐서 진행해주세요.</p>
            <p>
              신청/승인 과정 없이 고객님께서 직접 제품을 보내실 경우 택배사에서
              추가 배송비를 요구할 수 있습니다.
            </p>
          </InformationTable.SecondColumn>
          <InformationTable.FirstColumn>
            <p>반품/교환 불가 안내</p>
          </InformationTable.FirstColumn>
          <InformationTable.SecondColumn>
            <p>
              고객님이 상품포장을 개봉하여 사용 또는 설치완료되어 상품의 가치가
              훼손된 경우
            </p>

            <p>(단, 내용확인을 위한 포장개봉의 경우는 예외)</p>

            <p>
              고객님의 단순변심으로 인한 교환/반품 신청이 상품 수령한 날로부터
              7일이 경과한 경우
            </p>

            <p>고객님의 사용 또는 일부 소비에 의해 상품의 가치가 훼손된 경우</p>

            <p>
              시간 경과에 따라 재판매가 어려운 상품 등의 가치가 현저히 감소한
              경우
            </p>

            <p>
              (신선식품의 경우 선도저하 및 상품불량일 경우 수령일로부터 1~2일 내
              교환/반품 신청)
            </p>

            <p>
              복제가 가능한 재화 등의 포장을 훼손한 경우(포장인증된 전자제품,
              DVD,CD 도서 등 복제 가능한 상품)
            </p>

            <p>
              배송된 상품이 하자 없음을 확인한 후 설치가 완료된 상품의
              경우(가전,가구,헬스기구 등)
            </p>

            <p>
              고객님의 요청에 따라 개별적으로 주문제작되는 상품의 경우(수제화,
              귀금속 등)
            </p>

            <p>
              구매한 상품의 구성품이 누락된 경우(화장품 세트, 의류부착 악세서리,
              가전제품 부속품,사은품 등)
            </p>

            <p>
              기타,상품의 교환, 환불 및 상품 결함 등의 보상은
              재정경제부고시,소비자피해보상규정에 의함
            </p>
          </InformationTable.SecondColumn>
        </InformationTable.Body>
      </InformationTable>

      <InformationTable>
        <InformationTable.Header title='환불안내' />
        <InformationTable.Body>
          <InformationTable.FirstColumn>
            <p>카드 결제 환불</p>
          </InformationTable.FirstColumn>
          <InformationTable.SecondColumn>
            <p>
              결제 당일 취소는 카드사 홈페이지에서 당일 취소확인이 가능합니다.
            </p>
            <p>
              익일 취소일 경우 카드사 사정에 따라 3-7일 후 해당 카드사
              홈페이지에서 취소 내역을 확인하실 수 있습니다.
            </p>
          </InformationTable.SecondColumn>
          <InformationTable.FirstColumn>
            <p>
              현금결제 <br />
              (실시간 계좌이체 / 무통장 입금)
            </p>
          </InformationTable.FirstColumn>
          <InformationTable.SecondColumn>
            <p>
              취소/반품 신청 시, 환불계좌를 등록하시면 물류 센터에서 반품제품을
              확인한 뒤 영업일 3일 이내에 환불처리됩니다.
            </p>
          </InformationTable.SecondColumn>
        </InformationTable.Body>
      </InformationTable>
    </div>
  );
}
