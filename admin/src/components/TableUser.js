import { useTable } from 'react-table';
import { useEffect, useMemo, useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import axios from '../hooks/axios';

const TableUser = () => {
    const [info, setInfo] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('user/all');
            setInfo(data.data);
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`user/delete/${id}`);
        } catch (err) {
            console.log(err.message);
        }
    };
    const handleLock = async (id) => {
        try {
            await axios.delete(`user/lock/${id}`);
        } catch (err) {
            console.log(err.message);
        }
    };
    const data = useMemo(() => {
        if (!info) return []; // nếu info không tồn tại thì trả về một mảng rỗng
        return info.map((item) => ({
            col1: (
                <span
                    className={
                        item.isLocked
                            ? 'bg-red-500 rounded-2xl text-white px-3 py-1'
                            : 'bg-green-400 rounded-2xl text-white px-3 py-1'
                    }
                >
                    {item.isLocked ? 'Lock' : 'Active'}
                </span>
            ),
            col2: item.fullname,
            col3: item.email,
            col4: (
                <div className="flex justify-center gap-3">
                    <BsTrash
                        onClick={() => {
                            handleDelete(item._id);
                        }}
                        size={25}
                        className="cursor-pointer"
                    />
                    <AiOutlineLock
                        onClick={() => {
                            handleLock(item._id);
                        }}
                        size={25}
                        className="cursor-pointer"
                    />
                </div>
            ),
        }));
    }, [info]);

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
        [],
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
        <table {...getTableProps()} className="w-full bg-white">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()} className="py-3">
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return (
                                    <td className="text-center border-t-2 border-b-2 py-3" {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TableUser;
