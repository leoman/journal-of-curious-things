import styled from 'styled-components';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import {
  GridList,
  GridListTile,
} from '@material-ui/core';


export const SortableContainerWrapper = styled(GridList)``;
export const SortableElementWrapper = styled(GridListTile)``;

export const PhotosWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const ImageOverlayHover = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  text-align: center;
  font-size: 40px;
  color: white;
  vertical-align: middle;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
  font-family: 'Playfair Display', serif;
  cursor: pointer;
  z-index: 1;
  &:hover {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;

export const AddPhotoWrapper = styled.div`
   margin-top: 8px;
   margin-bottom: 8px;
`;
