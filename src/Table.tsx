
import { useTable } from "react-table";
import "../src/css/Table.css"
export default function TableComponent({columns, data}: any) 
{
 
    const initialState = {  };
    const {
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data, initialState });

    return (
        <div>
              <table  {...getTableBodyProps()} data-testid="users__table">
                <thead>
                    {
                        headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} style={{ textAlign: "center" }} className="">
                                    {
                                        column.render('Header')
                                    }
                                    </th>
                                ))
                            }
                            </tr>
                        ))
                    }
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    if(cell.column.id == 'avatar') 
                                    {
                                        return(
                                            <td {...cell.getCellProps()} style={{ textAlign: "center" }}>
                                                <img src={cell.value} alt="Avatar" width="120" data-testid={"user__img-" + cell.row.values.id}/>
                                            </td>
                                        )
                                    }

                                    return (
                                        <td {...cell.getCellProps()}>
                                        {
                                            cell.render('Cell')
                                        }
                                        </td>
                                    )
                                })
                            }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
}