import client from "../client";

export const getRecords = () => client.get("/records");