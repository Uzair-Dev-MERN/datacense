import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import { columns, data } from "../../content/TableData"; // Ensure the path is correct
import type { DataType } from "../../content/TableData"; // Import DataType

interface CustomTableProps extends TableProps<DataType> {
  customColumns?: typeof columns;
  customData?: DataType[];
}

const CustomTable: React.FC<CustomTableProps> = ({
  customColumns = columns,
  customData = [],
  ...rest
}) => {
  return (
    <Table<DataType>
      columns={customColumns}
      dataSource={data}
      {...rest}
    />
  );
};

export default CustomTable;
