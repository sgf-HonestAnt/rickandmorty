import React from "react";

export default function Pagination(props: { page: number; setPage: any }) {
  const { page, setPage } = props;
  return (
    <div>
      {" "}
      <span
        onClick={() => {
          page > 1 && setPage(page - 1);
        }}>
        Prev
      </span>{" "}
      | {page} |{" "}
      <span
        onClick={() => {
          setPage(page + 1);
        }}>
        Next
      </span>{" "}
    </div>
  );
}
