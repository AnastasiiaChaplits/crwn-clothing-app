import { useSelector } from "react-redux";

import { MenuItem } from "../index";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import { DirectoryMenuContainer } from "./styled";

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
