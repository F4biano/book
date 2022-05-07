import styled from "styled-components";

export { Preview };

const Wrapper = styled.section`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 70vh;
  background-color: white;
`;
const LeftBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 35vh;
  background-color: #ffc33b;
`;
const Name = styled.div`
  position: absolute;
  left: 0;
  top: 5vh;
  height: 8vh;
  width: 70vh;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 4vh;
`;
const PhotoBox = styled.div`
  position: absolute;
  left: 0;
  top: 13vh;
  height: 27vh;
  width: 35vh;
  background-color: #ffc33b;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Photo = styled.div`
  height: 20vh;
  width: 20vh;
  border-radius: 50%;
  background-color: white;
  border: 1px solid black;
`;
const Block = styled.div`
  position: absolute;
  left: 0;
  top: ${(props) => 40 + props.num * 15}vh;
  height: 15vh;
  width: 35vh;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const BlockTitle = styled.div`
  color: white;
  font-size: 2vh;
`;
const BlockValue = styled.div`
  color: white;
  font-size: 2.5vh;
  font-weight: 600;
`;
const Description = styled.div`
  position: absolute;
  right: 0;
  top: ${(props) => props.top}vh;
  height: 38vh;
  width: 35vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2vh 3vh;
`;
const DescTitle = styled.div`
  color: #cc8751;
  font-size: 2vh;
  text-align: center;
  font-weight: 700;
  padding-bottom: 0.5vh;
`;
const DescValue = styled.div`
  color: black;
  font-size: 1.8vh;
  text-align: justify;
`;

function Preview({ user }) {
  return (
    <Wrapper>
      <LeftBlock />
      <Name>{user.name}</Name>
      <PhotoBox>
        <Photo />
      </PhotoBox>
      <Block num={0} color='#fdb732'>
        <BlockTitle>Gênero</BlockTitle>
        <BlockValue>{user.gender}</BlockValue>
      </Block>
      <Block num={1} color='#f3ae31'>
        <BlockTitle>Data de nascimento</BlockTitle>
        <BlockValue>{user.birth}</BlockValue>
      </Block>
      <Block num={2} color='#eaa630'>
        <BlockTitle>Origem</BlockTitle>
        <BlockValue>{user.birthplace}</BlockValue>
      </Block>
      <Block num={3} color='#de9a2f'>
        <BlockTitle>Hobby</BlockTitle>
        <BlockValue>{user.hobby}</BlockValue>
      </Block>
      <Description top={22}>
        <DescTitle>Sobre você, sonhos, ambições</DescTitle>
        <DescValue>{user.about}</DescValue>
      </Description>
      <Description top={62}>
        <DescTitle>Porque você escolheu engenharia</DescTitle>
        <DescValue>{user.why}</DescValue>
      </Description>
    </Wrapper>
  );
}
