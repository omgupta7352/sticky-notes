import React from 'react';

const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };

  return (
    <header className="app-header">
      <h1 className="app-header__title">
        <span class="id1">S</span>
        <span class="id2">t</span>
        <span class="id3">i</span>
        <span class="id4">c</span>
        <span class="id2">k</span>
        <span class="id3">y</span> <span class="id1">N</span>
        <span class="id2">o</span>
        <span class="id3">t</span>
        <span class="id4">e</span>
        <span class="id2">s</span>
      </h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <input
          type="text"
          placeholder="Type here to search..."
          className="search"
          value={props.searchText}
          onChange={callSearch}
        />
      </aside>
    </header>
  );
};

export default Header;
