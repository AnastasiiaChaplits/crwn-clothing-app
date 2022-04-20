import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CollectionPreview } from "../index";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import { CollectionsOverviewContainer } from "./styled";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});
export default connect(mapStateToProps)(CollectionsOverview);
