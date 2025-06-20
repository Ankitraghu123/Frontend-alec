import React from "react";
import { BlogSidebar } from "./BlogSidebar";

export const BlogContainer = ({ children }) => {
  return (
    <section id="margin-top">
      <div className="td_height_12 td_height_lg_30" />
      <div className="container">
        <div className="row td_row_reverse_lg td_gap_y_50 justify-content-center">
          {/* list */}
          <div className="col-lg-10">{children}</div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
