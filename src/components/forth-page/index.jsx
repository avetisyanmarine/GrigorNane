import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import HeartLine from "../../assets/image/heartline.png";
import Photo3 from "../../assets/image/examp2.JPG";
import LastPhoto from "../../assets/image/lastPhoto.JPG";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Սուրբ Մարիամ Աստվածածին եկեղեցի"}
            mapSrc={
              "https://yandex.com/navi/org/15438436392?si=1mtj5b4xhzkrcfv38q68txjte0"
            }
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"«Աղաբաբյանս» ռեստորանային համալիր"}
            mapSrc={
              "https://yandex.com/navi/org/79838143048?si=1mtj5b4xhzkrcfv38q68txjte0"
            }
          />
        </ForthPagePartContext>
        <div className="relative mt-10">
          <img
            src={Photo3}
            alt="Restaurant"
            className="w-full rounded-[15px]"
          />
        </div>

        <div className="text-center my-14">
          <h2 className="text-[30px]!">Նուրբ հիշեցումներ</h2>
          <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
          <Flexible
            className=" font-[600] px-5"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Այս առանձնահատուկ օրը սիրով խնդրում ենք հագուստը ընտրել տոնական ոճի։
            <br />
            <br />
            Ընտրությունը կարող է լինել ցանկացած գույնի բացառությամբ սպիտակի, որը
            պահպանված է հարսնացուի կերպարի համար՝ որպես մաքրության և սիրո
            խորհրդանիշ։
          </Flexible>
          <hr className="mx-auto my-8 w-[300px]" />
        </div>
        <img src={LastPhoto} className="rounded-[15px]" alt="" />
        <div className="text-center my-14">
          <h2 className="text-[30px]!">RSVP</h2>
          <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
          <Flexible
            className=" font-[600] px-5"
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Ձեր ներկայությունը մեզ համար կլինի ամենաթանկ նվերը, քանի որ միասին
            կանցկացնենք սիրով, ուրախությամբ և անմոռանալի պահերով լի օր։ <br />
            <br /> Խնդրում ենք մեր կարևոր օրվան Ձեր ներկայությունը հաստատել
            մինչև Հուլիսի 2-ը։
          </Flexible>
          <hr className="mx-auto my-8 w-[300px]" />
        </div>
        <h2 className="text-[25px]! text-center my-[30px]">
          Սիրով՝ Տուլգարյան և Մելիք-Ստեփանյանս ընտանիքներ
        </h2>
      </Container>
    </ForthPagePart>
  );
};
