import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const OrderDetails = (props) => {

    return (
        <TableContainer >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Order ID</TableCell>
                        <TableCell align="right">Customer Name</TableCell>
                        <TableCell align="right">Order Address</TableCell>
                        <TableCell align="right">Order DateTime</TableCell>
                        <TableCell align="right">Order Details</TableCell>
                        <TableCell align="right">Tracking Number</TableCell>
                        <TableCell align="right">Order Status</TableCell>
                        <TableCell align="right">Delivery Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((row) => (
                        <TableRow
                            key={row.order_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.order_id}
                            </TableCell>
                            <TableCell align="right">{row.customer_name}</TableCell>
                            <TableCell align="right">{row.order_address}</TableCell>
                            <TableCell align="right">{row.order_datetime}</TableCell>
                            <TableCell align="right">{row.order_details}</TableCell>
                            <TableCell align="right">{row.tracking_no}</TableCell>
                            <TableCell align="right">{row.order_status}</TableCell>
                            <TableCell align="right">{row.delivery_date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderDetails;