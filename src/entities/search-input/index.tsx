import { observer } from "mobx-react-lite";
import React from "react";

interface SearchInputProps {
  label: string
  onChange: () => void
  value: string
  error: boolean
  errorMessage: string
}

const SearchInput: React.FC<SearchInputProps> = ({
  label, 
  onChange, 
  value, 
  error, 
  errorMessage
}) => {
  return (
    <div className="search-input-container">
      <input className="search-input" type="text" value={value} onChange={onChange} />
      <div className="serach-input-label">
        {label}
      </div>
    </div>
  )
}

export default observer(SearchInput);