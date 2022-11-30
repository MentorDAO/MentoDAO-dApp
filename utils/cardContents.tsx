import {
  PersonOutlineOutlined,
  WorkOutlineOutlined,
} from '@mui/icons-material';
import {
  addressToShortAddress,
  hexStringToJson,
  soulToFirstLastNameString,
} from './converters';
import { resolveLink } from 'helpers/IPFS';
import TaskSoulCardDetails from 'components/entity/task/TaskSoulCardDetails';

export interface CardItem {
  id: string;
  title: string;
  label: string;
  link: string;
  imgSrc: string;
  roles?: any[];
  avatarIcon?: any;
  baseRoute?: string;
  children?: any;
}

// Item Processing Function
export const soulCardContent = (item: any): CardItem => {
  let metadata = hexStringToJson(item.metadata);

  let ret = {
    id: item.id,
    imgSrc: resolveLink(metadata?.image),
    avatarIcon: <PersonOutlineOutlined />,
    label: addressToShortAddress(item.owner),

    //DEPRECATE soulToFirstLastNameString() Usage here. That should be stored in  metadata.name
    title: metadata?.name || soulToFirstLastNameString(item),

    metadata,
    link: `/soul/${item.id}`,
    // roles: [], // TODO: add roles logic
  };

  // console.log('soul', ret);
  return ret;
};

// Game Card Processing
export const gameCardContent = (item: any): CardItem => {
  let metadata = hexStringToJson(item.metadata);
  let ret = {
    id: item.id,
    imgSrc: resolveLink(metadata?.image),
    label: metadata?.description,
    title: metadata?.name,
    metadata,
    link: `/soul/${item.owner}`,
    avatarIcon: <WorkOutlineOutlined />,
  };
  // ret.avatarIcon = (<WorkOutlineOutlined />);
  return ret;
};

// Process Card Processing
export const processCardContent = (soul: any): CardItem => {
  let metadata = hexStringToJson(soul.metadata);
  let ret = {
    id: soul.id,
    imgSrc: 'PARENT_IMAGE',
    avatarIcon: <WorkOutlineOutlined />,
    label: metadata?.description,
    title: metadata?.name,
    metadata,
    link: `/task/${soul.owner}`,
    children: soul && <TaskSoulCardDetails address={soul.owner} />,
  };
  // console.log('Task soul', { ret, soul, owner: soul.owner });
  return ret;
};

// Game Participant
export const gamePartCardContent = (item: any): CardItem => {
  let metadata = hexStringToJson(item.entity.metadata);
  // console.log('Game Participant', { metadata, item });
  let ret = {
    id: item.entity.id,
    imgSrc: resolveLink(metadata?.image),
    label: metadata?.description,
    title: metadata?.name,
    metadata,
    link: `/soul/${item.entity.id}`,
    roles: item?.roles,
  };
  return ret;
};

// Soul Part
export const soulPartCardContent = (item: any): CardItem => {
  let metadata = hexStringToJson(item.aEnd.metadata);
  let ret = {
    id: item.aEnd.id,
    imgSrc: resolveLink(metadata?.image),
    label: metadata?.description,
    title: metadata?.name,
    metadata,
    link: `/soul/${item.aEnd.owner}`,
    roles: item?.roles,
  };
  // console.log('soulPartCardContent() Soul Part', { metadata, item, ret });
  return ret;
};

// Soul Part for Tasks (Using Parent's Image)
export const soulPartTaskCardContent = (item: any): CardItem => {
  let metadata = hexStringToJson(item.aEnd.metadata);
  let ret = {
    id: item.aEnd.id,
    imgSrc: 'PARENT_IMAGE',
    label: metadata?.description,
    title: metadata?.name,
    metadata,
    // link: `/tasks/${item.aEnd.owner}`,
    link: `/soul/${item.aEnd.owner}`,
    roles: item?.roles,
  };
  // console.log('soulPartTaskCardContent() Soul Part', { metadata, item, ret });
  return ret;
};

// Task Participant // DEPRECATED
export const taskPartCardContent = (item: any): CardItem => {
  console.warn('Task Part Item', item);
  let gameMetadata = hexStringToJson(item?.entity?.game?.metadata); //Games no longer have metadata...
  let metadata = hexStringToJson(item?.entity?.metadata);
  let ret = {
    id: item.entity.id,
    imgSrc: resolveLink(gameMetadata?.image),
    label: metadata?.description,
    title: metadata?.name,
    metadata,
    link: `/tasks/${item.entity.id}`,
    roles: item?.roles,
  };
  return ret;
};
