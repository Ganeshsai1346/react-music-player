/** @format */
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux/es/exports";

const DisplaySong = () => {
  const song = useSelector((state) => state.displayReducer.song);

  return (
    <Container>
      <p className="text-light">{song.title}</p>
    </Container>
  );
};

export default DisplaySong;
