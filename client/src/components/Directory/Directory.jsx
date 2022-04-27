import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { MenuItem } from "../index";
import { selectDirectorySections } from "../../redux/directory/directorySelectors";
import { DirectoryMenuContainer } from "./styled";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);