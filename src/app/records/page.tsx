"use client";

import Table, {
  TableProps,
  TableStructure,
} from "../../components/Table/Table";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import AButton from "../../components/AButton/AButton";
import Header1 from "../../components/Headers/Header1";
import RecordsFilter from "./RecordsFilter";

const structure: TableStructure[] = [
  {
    datakey: "concept",
    title: "Concept",
    align: "start",
  },
  {
    datakey: "date",
    title: "Date",
    format: (value) => {
      // ts to date formal (dd/mm/yyyy)
      value = new Date(value).toLocaleDateString("es-ES");
      return <p>{value}</p>;
    },
  },
  {
    datakey: "category",
    title: "Category",
    format: (id) => {
      const category = categories.find((e) => e.id === id)?.name;
      return <p>{category}</p>;
    },
  },
  {
    datakey: "amount",
    title: "Amount",
    format: (value) => {
      value = value.toFixed(2);
      const color = value > 0 ? "text-emerald-500" : "text-rose-500";

      return <p className={color}>{value > 0 ? `+${value}` : value}</p>;
    },
  },
];

const categories = [
  {
    id: 1,
    name: "Food and Beverages",
  },
  {
    id: 2,
    name: "Transportation",
  },
  {
    id: 3,
    name: "Housing",
  },
  {
    id: 4,
    name: "Health",
  },
  {
    id: 5,
    name: "Entertainment",
  },
  {
    id: 6,
    name: "Education",
  },
  {
    id: 7,
    name: "Clothing",
  },
  {
    id: 8,
    name: "Income",
  },
  {
    id: 9,
    name: "Gifts/Donations",
  },
  {
    id: 10,
    name: "Miscellaneous",
  },
];

const data = [
  {
    concept: "Grocery shopping",
    date: 1601331925020,
    category: 1,
    amount: -75.2,
  },
  {
    concept: "Monthly Salary",
    date: 1603923925020,
    category: 8,
    amount: 2500.0,
  },
  {
    concept: "Electricity bill",
    date: 1606515925020,
    category: 3,
    amount: -30.0,
  },
  {
    concept: "Car Insurance",
    date: 1609107925020,
    category: 2,
    amount: -100.0,
  },
  {
    concept: "Gym Membership",
    date: 1611699925020,
    category: 4,
    amount: -45.0,
  },
  {
    concept: "Book Purchase",
    date: 1614291925020,
    category: 6,
    amount: -15.5,
  },
  {
    concept: "Dinner at Restaurant",
    date: 1616883925020,
    category: 1,
    amount: -60.0,
  },
  {
    concept: "Online Course Subscription",
    date: 1619475925020,
    category: 6,
    amount: -20.0,
  },
  {
    concept: "Sale of Old Laptop",
    date: 1622067925020,
    category: 10,
    amount: 300.0,
  },
  {
    concept: "Gift from Friend",
    date: 1624659925020,
    category: 9,
    amount: 150.0,
  },
  {
    concept: "Theater Tickets",
    date: 1627251925020,
    category: 5,
    amount: -80.0,
  },
  {
    concept: "Freelance Project",
    date: 1629843925020,
    category: 8,
    amount: 600.0,
  },
  {
    concept: "Coffee Shop",
    date: 1632435925020,
    category: 1,
    amount: -5.75,
  },
  {
    concept: "New Smartphone",
    date: 1635027925020,
    category: 10,
    amount: -500.0,
  },
  {
    concept: "Train Ticket",
    date: 1637619925020,
    category: 2,
    amount: -25.0,
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

      <RecordsFilter />

      <Table data={data} structure={structure} defaultSortIndex={0} />
    </>
  );
}
