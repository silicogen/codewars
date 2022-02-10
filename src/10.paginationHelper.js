// https://www.codewars.com/kata/515bb423de843ea99400000a

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.items = collection;
    this.perPage = itemsPerPage;
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this.items.length
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    const l = this.itemCount();
    const f = Math.floor(l/this.perPage);
    const m = l%this.perPage;
    return m ? f+1 : f;
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    const l = this.itemCount();
    const f = Math.floor(l/this.perPage);
    const m = l%this.perPage;
    if(pageIndex<f){
      return this.perPage;
    }else if(pageIndex<f+1){
      return m;
    }else{
      return -1;
    }  
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    const l = this.itemCount();
    if (itemIndex<0 || itemIndex>=l)
      return -1;
    const ni = itemIndex+1;
    const fi = Math.floor(ni/this.perPage);
    const mi = ni%this.perPage;
    if(mi){
      return fi;
    }else{
      return fi-1;
    } 
  }