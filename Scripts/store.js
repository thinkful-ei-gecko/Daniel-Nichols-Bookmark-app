'use strict';

const store = (function() {

  const addBookmark = function(newBookmark) {
    this.bookmarks.push(newBookmark);
  };

  const setError = function(error) {
    this.error = error;
  };
  

  function deleteBookmark(id) {
    store.bookmarks = store.bookmarks.filter(item => item.id !== id);
  }


  const findBookmark = function(id) {
    return this.bookmarks.find(bookmark => bookmark.id === id);
  };

  const filterBookmarks = function() {
    store.filtered = true;
  };
  const filterAdd = function(filterVal) {
    store.filterVal = filterVal;
  };







  return {
    bookmarks: [],
    adding: false, 
    editing: false, 
    filtered: false, 
    showError: false, 
    filterVal: null,
    setError,
    error: null,

    addBookmark,
    deleteBookmark,
    findBookmark,
    filterBookmarks,
    filterAdd
  };




})();