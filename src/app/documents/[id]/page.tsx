import { featuredCompany } from "@/components/common/data/pagesData";
import OtherLayout from "@/components/layouts/OtherLayout";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
const LeftBar = React.lazy(() => import("@/components/landing/LeftBar"));
const UnverSalFilter = React.lazy(
  () => import("@/components/document/UnverSalFilter")
);
type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const product = await featuredCompany.find((item) => item.id == Number(id));

  return {
    title: product?.lable + " | Standart shop",
    description: product?.designation,
    openGraph: {
      title: product?.lable + " | Standart shop",
      description: product?.designation,
      images: [
        {
          url: "https://nextjs.org/og.png", // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: "https://assets.asana.biz/transform/d52daace-4530-4ab3-964b-fdce498e9546/article-business-strategy-business-requirements-document-template-2x?io=transform:fill,width:1440&format=webp", // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: "My custom alt",
        },
      ],
    },
  };
}
export default function DocumentDetail() {
  return (
    <OtherLayout>
      <Container>
        <UnverSalFilter />
        <Row>
          <Col md={3}>
            <LeftBar />
          </Col>

          <Col md={9}>
            <Card>
              <CardBody className="py-5" id="section-to-print">
                <h4
                  className="text-center text-primary"
                  style={{ fontSize: 20 }}
                >
                  ҚАРОРИ ЎЗБЕКИСТОН РЕСПУБЛИКАСИ ВАЗИРЛАР МАҲКАМАСИНИНГ
                </h4>
                <p
                  className="text-center text-primary mt-5"
                  style={{ fontSize: 18 }}
                >
                  ИССИҚХОНА ХЎЖАЛИКЛАРИГА ИССИҚХОНАЛАРНИ КЎМИР ЁҚИЛҒИСИДА ИСИТИШ
                  УЧУН КЎМИР ҚОЗОНИНИ ХАРИД ҚИЛИШ ХАРАЖАТЛАРИНИНГ БИР ҚИСМИНИ
                  ҚОПЛАШ ТАРТИБИ ТЎҒРИСИДАГИ НИЗОМНИ ТАСДИҚЛАШ ҲАҚИДА
                </p>
                <div
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    textIndent: "15mm",
                    margin: "0 0 10px 0",
                    fontStyle: "normal",
                    color: "#000",
                    fontWeight: "normal",
                    fontSize: 18,
                    fontVariant: "normal",
                    lineHeight: 1.3,
                  }}
                >
                  Ўзбекистон Республикаси Президентининг «2023 йилда қайта
                  тикланувчи энергия манбаларини ва энергия тежовчи
                  технологияларни жорий этишни жадаллаштириш чора-тадбирлари
                  тўғрисида» 2023 йил 16 февралдаги ПҚ-57-сон қарори ҳамда
                  Вазирлар Маҳкамасининг «Иссиқхона хўжаликлари ва
                  мева-сабзавотларни экспорт қилувчи корхоналарнинг фаолиятини
                  қўллаб-қувватлашга доир қўшимча чора-тадбирлар тўғрисида» 2023
                  йил 27 октябрдаги 567-сон қарори ижросини таъминлаш,
                  шунингдек, иссиқхона хўжаликлари фаолиятини қўллаб-қувватлаш
                  ва маҳсулот етиштириш ҳажмларини ошириш мақсадида Вазирлар
                  Маҳкамаси қарор қилади:
                </div>
                <div
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    textIndent: "15mm",
                    margin: "0 0 10px 0",
                    fontStyle: "normal",
                    color: "#000",
                    fontWeight: "normal",
                    fontSize: 18,
                    fontVariant: "normal",
                    lineHeight: 1.3,
                  }}
                >
                  {" "}
                  1. Қуйидагиларни назарда тутувчи Иссиқхона хўжаликларига
                  иссиқхоналарни кўмир ёқилғисида иситиш учун кўмир қозонини
                  харид қилиш харажатларининг бир қисмини қоплаш тартиби
                  тўғрисидаги низом иловага мувофиқ тасдиқлансин: иссиқхоналарни
                  кўмир ёқилғисида иситиш учун кўмир қозонини харид қилиш
                  харажатларининг бир қисмини қоплаш учун субсидия ажратиш
                  бўйича талаб этиладиган ҳужжатлар, уларни кўриб чиқиш ҳамда
                  субсидия ажратиш тўғрисидаги қарорни қабул қилиш тартиби;
                  иссиқхоналарни кўмир ёқилғисида иситиш учун кўмир қозонидан
                  фойдаланиш юзасидан мониторинг юритиш тартиби.
                </div>
                <div
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    textIndent: "15mm",
                    margin: "0 0 10px 0",
                    fontStyle: "normal",
                    color: "#000",
                    fontWeight: "normal",
                    fontSize: 18,
                    fontVariant: "normal",
                    lineHeight: 1.3,
                  }}
                >
                  {" "}
                  2. Инвестицияларни жалб қилиш, саноатни ривожлантириш ва
                  савдони тартибга солиш масалалари бўйича Ҳукумат комиссияси
                  (Ж. Ходжаев) (кейинги ўринларда — Ҳукумат комиссияси) бир ой
                  муддатда 2024 йилда кўмир ёқилғисида иситиш учун кўмир
                  қозонини харид қилиш харажатларининг бир қисми қоплаб
                  бериладиган иссиқхоналарнинг манзилли рўйхатини тасдиқласин.
                </div>
                <div
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    textIndent: "15mm",
                    margin: "0 0 10px 0",
                    fontStyle: "normal",
                    color: "#000",
                    fontWeight: "normal",
                    fontSize: 18,
                    fontVariant: "normal",
                    lineHeight: 1.3,
                  }}
                >
                  3. Ўзбекистон Республикаси Қишлоқ хўжалиги вазирлиги Ҳукумат
                  комиссияси томонидан тасдиқланган рўйхатга мувофиқ
                  «Agrosubsidiya» ахборот тизимига киритилган иссиқхона
                  хўжаликларига ўз вақтида субсидия ажратилишини назорат қилиб
                  борсин.{" "}
                </div>
                <div
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                    textIndent: "15mm",
                    margin: "0 0 10px 0",
                    fontStyle: "normal",
                    color: "#000",
                    fontWeight: "normal",
                    fontSize: 18,
                    fontVariant: "normal",
                    lineHeight: 1.3,
                  }}
                >
                  4. Мазкур қарорнинг бажарилишини назорат қилиш Ўзбекистон
                  Республикаси Бош вазирининг ўринбосарлари Ж.А. Қўчқоров ва
                  Ж.А. Ходжаев зиммасига юклансин.
                </div>
                <div className="text-end text-primary" style={{ fontSize: 18 }}>
                  Ўзбекистон Республикасининг Бош вазири А. АРИПОВ Тошкент ш.,
                </div>
                <div
                  className="text-start "
                  style={{ width: 300, fontSize: 18 }}
                >
                  2024 йил 9 июль, 400-сон Вазирлар Маҳкамасининг 2024 йил 9
                  июлдаги 400-сон қарорига ИЛОВА
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </OtherLayout>
  );
}
