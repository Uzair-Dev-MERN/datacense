import type { TableColumnsType, TableProps } from "antd";

export type TableRowSelection<T extends object = object> =
  TableProps<T>["rowSelection"];

export interface DataType {
  id: string; // Added id field
  key: React.ReactNode;
  name: string;
  age: number;
  veteran: string;
  children?: DataType[];
}

export const columns: TableColumnsType<DataType> = [
  {
    key: "id",
    title: "Id",
    dataIndex: "id",
    width: "25%",
  },
  {
    key: "name",
    title: "Name",
    dataIndex: "name",
    width: "25%",
  },
  {
    key: "age",
    title: "Age",
    dataIndex: "age",
    width: "25%",
  },
  {
    key: "veteran",
    title: "Veteran",
    dataIndex: "veteran",
    width: "25%",
  },
];

export const data: DataType[] = [
  {
    id: "1", // Added id field in each row
    key: 1,
    name: "John Brown sr.",
    age: 60,
    veteran: "Yes",
    children: [
      {
        id: "1", // Added id field for nested children
        key: 11,
        name: "John Brown",
        age: 42,
        veteran: "No",
      },
      {
        id: "2",
        key: 12,
        name: "John Brown jr.",
        age: 30,
        veteran: "No",
        children: [
          {
            id: "1",
            key: 121,
            name: "Jimmy Brown",
            age: 16,
            veteran: "No",
          },
        ],
      },
      {
        id: "3",
        key: 13,
        name: "Jim Green sr.",
        age: 72,
        veteran: "Yes",
        children: [
          {
            id: "1",
            key: 131,
            name: "Jim Green",
            age: 42,
            veteran: "Yes",
            children: [
              {
                id: "1",
                key: 1311,
                name: "Jim Green jr.",
                age: 25,
                veteran: "No",
              },
              {
                id: "2",
                key: 1312,
                name: "Jimmy Green sr.",
                age: 18,
                veteran: "Yes",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2", // Added id field in each row
    key: 2,
    name: "Joe Black",
    age: 32,
    veteran: "No",
  },
];
