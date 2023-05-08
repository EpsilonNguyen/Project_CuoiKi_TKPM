import { useTable } from 'react-table';
import { useMemo } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const TableUser = () => {
    const data = useMemo(
        () => [
            {
                col1:
                    <span className='bg-green-400 rounded-2xl text-white px-3 py-1'>
                        Active
                    </span>,
                col2: 'User',
                col3: 'abc@gamil.com',
                col4:
                    <div className='flex justify-center gap-3'>
                        <BsTrash size={25} className='cursor-pointer' />
                        <AiOutlineLock size={25} className='cursor-pointer' />
                    </div>,
            },
            {
                col1:
                    <span className='bg-red-500 rounded-2xl text-white px-3 py-1'>
                        Locked
                    </span>,
                col2: 'User',
                col3: 'abc@gamil.com',
                col4:
                    <div className='flex justify-center gap-3'>
                        <BsTrash size={25} className='cursor-pointer' />
                        <AiOutlineLock size={25} className='cursor-pointer' />
                    </div>,
            },
            {
                col1:
                    <span className='bg-green-400 rounded-2xl text-white px-3 py-1'>
                        Active
                    </span>,
                col2: 'User',
                col3: 'abc@gamil.com',
                col4:
                    <div className='flex justify-center gap-3'>
                        <BsTrash size={25} className='cursor-pointer' />
                        <AiOutlineLock size={25} className='cursor-pointer' />
                    </div>,
            },
        ],
        []
    )

    const columns = useMemo(
        () => [
            {
                Header: 'Account Status',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'User Name',
                accessor: 'col2',
            },
            {
                Header: 'Email',
                accessor: 'col3',
            },
            {
                Header: 'Action',
                accessor: 'col4',
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <table {...getTableProps()}
            className='w-full bg-white'>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                className='py-3'
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        className='text-center border-t-2 border-b-2 py-3'
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default TableUser;