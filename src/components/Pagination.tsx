import React from "react";
import { GrPrevious, GrNext } from "react-icons/gr";

export default function Pagination(props: { page: number; setPage: any }) {
  const { page, setPage } = props;
  return (
    <div>
      {" "}
      <span
        onClick={() => {
          page > 1 && setPage(page - 1);
        }}>
        <GrPrevious className='inline' />
      </span>{" "}
      {page}{" "}
      <span
        onClick={() => {
          setPage(page + 1);
        }}>
        <GrNext className='inline' />
      </span>{" "}
    </div>
  );
}
