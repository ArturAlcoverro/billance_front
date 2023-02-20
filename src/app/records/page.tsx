import Button from "../components/Button/Button";
import Table, {TableProps, TableStructure} from "../components/Table/Table";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import AButton from "../components/AButton/AButton";
import Header1 from "../components/Headers/Header1";
import Test from "../components/Test";
import Select from "../components/Select/Select";
import Picker from "../components/Picker/Picker";
import YearPicker from "../components/YearPicker/YearPicker";

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

const selectOptions = [
  {
    key: "1",
    value: "Barcelona",
  },
  {
    key: "2",
    value: "Madrid",
  },
  {
    key: "3",
    value: "Valencia",
  },
];

export default function recordsPage() {

  return (
    <>
      <Header1>Records</Header1>
      
      <AButton href="/records/add" className="pr-4 pl-3">
        <PlusIcon />
        Add record
      </AButton>

      <Select
        className="w-64 mb-2"
        placeholder="Select a city..."
        options={selectOptions}
        position="bottom"
        align="center"
      />

      <Picker className="w-64 mb-2">
        
      </Picker>

      <YearPicker maxYear={2023} minYear={2000} className="mb-2 w-64"/>

      <div className="flex justify-start"></div>
      <Table data={data} structure={structure} defaultSortIndex={0} />
    </>
  );
}
