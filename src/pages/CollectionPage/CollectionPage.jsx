import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCollection } from "../../redux/shop/shopSelectors";
import { CollectionItem } from "../../components";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./styled";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const { title, items } = useSelector(selectCollection(collectionId));

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
