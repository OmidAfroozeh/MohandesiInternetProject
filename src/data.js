import DataGrid from 'react-data-grid';
import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";


export default function App(props) {
    const [table, setTable] = useState([]);
    function getData(input){
        axios({
            method: "get",
            url: "http://localhost:8080/",
          }).then((res) => setTable(res.data.list));
    }




    const [tableData, setTableData] = useState([]);
    const [form, setForm] = useState({
        sc: ""
    });
    const columns = [
        { key: 'firstName', name: 'firstName' },
        { key: 'lastName', name: 'lastName' },
        { key: 'gender', name: 'Gender' },
        { key: 'weight', name: 'Weight' },
        { key: 'condition', name: 'Condition' }
      ];
      
      return (
        <div >
            <div >
            <button type="button"  onClick={() => {
                    getData(form.sc);
                }}>Search</button>
                <input type="text" value={form.sc} onChange={(e) =>
                    setForm({ sc: e.target.value })
                } />
            </div>
        <DataGrid columns={columns} rows={table} />
        </div>  
        
        );
}