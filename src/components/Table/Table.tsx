'use client'

import { useEffect, useState } from 'react';
import Header from './Header/Header';
import styles from './Table.module.scss';

const ASC = 0;
const DESC = 1

function Table({ data, structure, defaultSortIndex }: any) {
  const [sortIndex, setSortIndex] = useState({
    index: defaultSortIndex,
    order: ASC,
  });

  function getSortIndex(index: any) {
    let _sortIndex = { index: index, order: ASC };
    if (sortIndex.index === index) {
      _sortIndex.order = sortIndex.order === ASC ? DESC : ASC;
    }
    return _sortIndex;
  }

  useEffect(() => {
    console.log(sortIndex);
  }, [sortIndex]);

  return (
    <div className={`${styles.main} bg-white border border-slate-300 rounded-2xl text-sm text-slate-600`}>
      <div className={styles.tableContainer}>
        <table>
          <thead className='border-b border-slate-300'>
            <tr>
              {structure.map((e: TableStructure, i: number) => (
                <th
                  key={e.datakey}
                  className={`${e.titleClassName} ${e.align}`}
                  onClick={(e) => {
                    setSortIndex(getSortIndex(i));
                  }}
                >
                  <Header title={e.title} index={i} selectedIndex={sortIndex} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortData(data, structure, sortIndex).map((e: any, i: number) => (
              <tr key={i} className="children:first:pt-3 children:last:pb-3">
                {structure.map((s: TableStructure) => (
                  <td
                    key={s.datakey}
                    className={`${s.labelClassName} ${s.align} p-3 pl-5`}
                  >
                    {s.format !== undefined
                      ? s.format(e[s.datakey])
                      : e[s.datakey]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function sortData(data: any, structure: any, index: any) {
    let order = index.order === ASC ? 1 : -1;
    const attr = structure[index.index].datakey;

    order = structure[index.index].defaultSortAsc === false ? order * -1 : order;

    data.sort(function (a: any, b: any) {
      if (a[attr] > b[attr]) return 1 * order;
      if (a[attr] < b[attr]) return -1 * order;
      return 0;
    });

    return data;
}

export interface TableProps {
	data: any[];
	structure: TableStructure[];
	defaultSortIndex: number;
}

export interface TableStructure {
	datakey: string;
	title: string;
	align?: string;
	format?: (e: any) => any;
	defaultSortAsc?: boolean;
	titleClassName?: string;
	labelClassName?: string;
}

export default Table;