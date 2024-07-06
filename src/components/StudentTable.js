// src/components/StudentTable.js
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-left: 250px;
    padding: 20px;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const Th = styled.th`
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
`;

const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
    &:hover {
        background-color: #ddd;
    }
`;

const StudentTable = () => {
    const students = [
        { rollNo: 1, name: 'Alice', city: 'New York' },
        { rollNo: 2, name: 'Bob', city: 'Los Angeles' },
        { rollNo: 3, name: 'Charlie', city: 'Chicago' },
        { rollNo: 4, name: 'David', city: 'Houston' },
        { rollNo: 5, name: 'Eve', city: 'Phoenix' },
        { rollNo: 6, name: 'Frank', city: 'Philadelphia' },
        { rollNo: 7, name: 'Grace', city: 'San Antonio' },
        { rollNo: 8, name: 'Hank', city: 'San Diego' },
        { rollNo: 9, name: 'Ivy', city: 'Dallas' },
        { rollNo: 10, name: 'Jack', city: 'San Jose' },
        { rollNo: 11, name: 'Kathy', city: 'Austin' },
        { rollNo: 12, name: 'Leo', city: 'Jacksonville' },
        { rollNo: 13, name: 'Mona', city: 'Fort Worth' },
        { rollNo: 14, name: 'Nina', city: 'Columbus' },
        { rollNo: 15, name: 'Oscar', city: 'Charlotte' },
        { rollNo: 16, name: 'Paul', city: 'San Francisco' },
        { rollNo: 17, name: 'Quincy', city: 'Indianapolis' },
        { rollNo: 18, name: 'Rita', city: 'Seattle' },
        { rollNo: 19, name: 'Steve', city: 'Denver' },
        { rollNo: 20, name: 'Tina', city: 'Washington' },
    ];

    return (
        <Container>
            <h2>Student Details</h2>
            <Table>
                <thead>
                    <tr>
                        <Th>Roll No</Th>
                        <Th>Name</Th>
                        <Th>City</Th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <Tr key={student.rollNo}>
                            <Td>{student.rollNo}</Td>
                            <Td>{student.name}</Td>
                            <Td>{student.city}</Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default StudentTable;
