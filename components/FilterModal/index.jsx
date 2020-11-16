import { NavModal } from "../../styles/NavModalStyle";
import {
  Container,
  CloseBtn,
  Col,
  Grid,
  ColorBtn,
  SizeBtn,
} from "./FilterModalStyle";

const FilterModal = ({ colors, sizes, setOpenFilter, handleFilter }) => {
  return (
    <>
      <NavModal onClick={() => setOpenFilter(false)} />
      <Container
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        exit={{ y: -500 }}
      >
        <CloseBtn onClick={() => setOpenFilter(false)}>X</CloseBtn>
        <Col>
          <h1>Color</h1>
          <Grid>
            {colors.map((color) => (
              <ColorBtn
                key={color.id}
                onClick={() => handleFilter(color)}
                color={color.name}
              ></ColorBtn>
            ))}
          </Grid>
        </Col>
        <Col>
          <h1>Size</h1>
          <Grid>
            {sizes.map((size) => (
              <SizeBtn key={size.id} onClick={() => handleFilter(size)}>
                {size.name}
              </SizeBtn>
            ))}
          </Grid>
        </Col>
      </Container>
    </>
  );
};

export default FilterModal;
