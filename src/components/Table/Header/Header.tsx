'use client'

import React from 'react'
import ChevronDownIcon from '@heroicons/react/24/outline/ChevronDownIcon'
import styles from './Header.module.scss'

function Header({ index, selectedIndex, title }: any) {
    let className = selectedIndex.order === 1 ? "" : styles.inverted

    if (index === selectedIndex.index)
        return <div className={`${className} ${styles.main} rounded-lg hover:bg-slate-100 p-2 pl-3 my-2 ml-2 last:mr-2`}>
            {title}
            <ChevronDownIcon strokeWidth={2.5}/>
        </div>
    else return <div className='rounded-lg flex justify-start hover:bg-slate-100 p-2 pl-3 my-2 ml-2 last:mr-2'>{title}</div>
}

export default Header