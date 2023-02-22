'use client'

import Table, {TableProps, TableStructure} from "../components/Table/Table";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import AButton from "../components/AButton/AButton";
import Header1 from "../components/Headers/Header1";
import RecordsFilter from "./RecordsFilter";


const structure: TableStructure[] = [
  {
    datakey: "name",
    title: "Name",
    align: "start",
  },
  {
    datakey: "mail",
    title: "E-mail",
  },
  {
    datakey: "amount",
    title: "Amount",
  },
];

const data = [
  {
    name: "John Doe",
    mail: "john@doe.com",
    amount: 100,
  },
  {
    name: "Jane Margot",
    mail: "jane@margot.com",
    amount: 200,
  },
  {
    name: "John Doe",
    mail: "john@doe.com",
    amount: 100,
  },
  {
    name: "Jane Margot",
    mail: "jane@margot.com",
    amount: 200,
  },
  {
    name: "John Doe",
    mail: "john@doe.com",
    amount: 100,
  },
  {
    name: "Jane Margot",
    mail: "jane@margot.com",
    amount: 200,
  },
  {
    name: "John Doe",
    mail: "john@doe.com",
    amount: 100,
  },
  {
    name: "Jane Margot",
    mail: "jane@margot.com",
    amount: 200,
  },
  {
    name: "John Doe",
    mail: "john@doe.com",
    amount: 100,
  },
  {
    name: "Jane Margot",
    mail: "jane@margot.com",
    amount: 200,
  },
  {
    name: "John Doe",
    mail: "john@doe.com",
    amount: 100,
  },
  {
    name: "Jane Margot",
    mail: "jane@margot.com",
    amount: 200,
  },
  {
    name: "John Doe",
    mail: "john@doe.com",
    amount: 100,
  },
  {
    name: "Jane Margot",
    mail: "jane@margot.com",
    amount: 200,
  },
  {
    name: "John Doe",
    mail: "john@doe.com",
    amount: 100,
  },
  {
    name: "Jane Margot",
    mail: "jane@margot.com",
    amount: 200,
  },
  {
    name: "John Doe",
    mail: "john@doe.com",
    amount: 100,
  },
  {
    name: "Jane Margot",
    mail: "jane@margot.com",
    amount: 200,
  },
];


export default function recordsPage() {

  return (
    <>
      <Header1>Records</Header1>
      
      <AButton href="/records/add" className="pr-4 pl-2">
        <PlusIcon />
        Add record
      </AButton>

      <RecordsFilter/>

      <Table data={data} structure={structure} defaultSortIndex={0} />
    </>
  );
}
