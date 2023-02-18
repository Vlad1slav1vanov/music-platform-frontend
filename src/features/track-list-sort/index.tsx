import { Tab, Tabs } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import './styles/index.scss'

interface TrackListSortProps {
  value: string
  getPopularTracks: () => void
  getAllTracks: () => void
  getNewTracks: () => void
}

const TrackListSort: React.FC<TrackListSortProps> = ({
  value,
  getAllTracks,
  getNewTracks,
  getPopularTracks
}) => {
  return (
    <Tabs 
    className="track-list-sort"
    value={value}
    >
      <Tab 
      value="all" 
      label="Все"
      onClick={getAllTracks}
      />
      <Tab 
      value="popular" 
      label="Популярные" 
      onClick={getPopularTracks}
      />
      <Tab 
      value="new" 
      label="Новые" 
      onClick={getNewTracks}
      />
    </Tabs>
  )
}

export default observer(TrackListSort);