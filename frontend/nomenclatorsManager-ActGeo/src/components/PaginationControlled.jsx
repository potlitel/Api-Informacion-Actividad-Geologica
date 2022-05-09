//import Pagination from "materialui-pagination";
import ReactPaginate from 'react-paginate';

export default function PaginationControlled(onPageChange,pageSize,count) {
  return (
    <div>
      <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={onPageChange}
                  pageRangeDisplayed={pageSize}
                  pageCount={count}
                  previousLabel="< previous"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  containerClassName="pagination"
                  activeClassName="active"
                  renderOnZeroPageCount={null}
                />
    </div>
  );
}