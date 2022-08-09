import { gql } from '@apollo/client';
import PaginatedListGQ from 'components/PaginatedListGQ';

/**
 * Component: Soul list filtered by type only
 */
export default function SoulListGQ(props: any) {
  //Soul Query - Role Optional
  const query = gql`
    query GetSouls($type: String!, $first: Int, $skip: Int) {
      souls(first: $first, skip: $skip, where: { type: $type }) {
        id
        owner
        type
        uri
        uriData
        metadata
        name
        uriImage
        uriFirstName
        uriLastName
      }
    }
  `;
  return <PaginatedListGQ {...props} query={query} />;
}
