import Task from 'classes/Task';
import PaginatedList from 'components/PaginatedList';
import useError from 'hooks/useError';
import useTask from 'hooks/useTask';
import { useEffect, useState } from 'react';
import { getPageTitle } from 'utils';
import Layout from '../../components/layout/Layout';
// import { CONF as PAGE_CONF, getCardContent } from './constants';
import { WorkOutlineOutlined } from '@mui/icons-material';

const CONF = {
  PAGE_TITLE: 'Hackathons',
  TITLE: 'Hackathons',
  SUBTITLE: ``,
  ROUTE: 'events',
};

const getCardContent = (item: any) => ({
  id: item.id,
  imgSrc: item.uriData.image,
  avatarIcon: <WorkOutlineOutlined />,
  label: item.uriData.description,
  title: item.name,
});

/**
 * Page for a list of Events
 */
// eslint-disable-next-line prettier/prettier
export default function EventsPage({ }: any) {
  const { handleError } = useError();
  const { getTasks } = useTask();
  const [items, setItems] = useState<Array<Task> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageCount, setCurrentPageCount] = useState(1);
  const pageSize = 16;

  async function loadData(page = currentPage, pageCount = currentPageCount) {
    try {
      // Update states
      setCurrentPage(page);
      setCurrentPageCount(pageCount);
      // Update states
      setItems(null);
      // Load tasks
      const items = await getTasks(
        undefined,
        'grant',
        undefined,
        pageSize,
        (page - 1) * pageSize,
      );
      setItems(items);
      // Add next page to pagination if possible
      if (page == pageCount && items.length === pageSize) {
        setCurrentPageCount(pageCount + 1);
      }
    } catch (error: any) {
      handleError(error, true);
    }
  }

  useEffect(() => {
    loadData(1, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Props
  const listProps = {
    baseRoute: PAGE_CONF.ROUTE,
    data: items,
    loadData,
    // renderActions,
    subtitle: PAGE_CONF.SUBTITLE,
    title: PAGE_CONF.TITLE,
    // card config
    getCardContent,
  };

  return (
    <Layout title={getPageTitle(PAGE_CONF.PAGE_TITLE)}>
      <PaginatedList {...listProps} />
    </Layout>
  );
}
