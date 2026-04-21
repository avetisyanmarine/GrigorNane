import MainPhoto from "../../assets/image/mainPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <div className="mt-35 text-[#2D2929] maintext">
            <p>Wedding day</p>
            <h3>Գրիգոր & Նանե</h3>
            <p>18.07.2026</p>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
