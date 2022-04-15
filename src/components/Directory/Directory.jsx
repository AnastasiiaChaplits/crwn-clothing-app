import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { MenuItem } from "../index";
import { selectDirectorySections } from "../../redux/directory/directorySelector";
import "./styles.scss";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
