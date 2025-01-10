import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const SearchField: React.FC = () => (
  <>
    <Input size="large" placeholder="Search" suffix={<SearchOutlined />} />
  </>
);

export default SearchField;
