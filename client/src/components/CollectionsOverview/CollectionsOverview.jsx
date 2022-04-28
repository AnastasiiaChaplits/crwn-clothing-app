import { useSelector } from "react-redux";

import { CollectionPreview } from "../index";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";
import { CollectionsOverviewContainer } from "./styled";

const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
