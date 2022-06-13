import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { fetchClient } from "../asingaction/custemers";

export const ReduxExample = () => {
    const dispatch = useDispatch();
  
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.custome.custome);

  const addMoney = (cash) => {
    dispatch({ type: "ADD_MONEY", payload: cash, gop: 1 });
  };
  const getMoney = (cash) => {
    dispatch({ type: "GET_MONEY", payload: cash, gop: 1 });
  };

  const addCustom = (name) => {
    const custom = {
      name,
      id: Date.now(),
    };
    console.log(custom.id);
    dispatch({ type: "ADD_CUSTOMER", payload: custom });
  };

  const delCustom = (custom) => {
    dispatch({ type: "DEL_CUSTOMER", payload: custom });
  };
  return (
    <div>
          <div style={{ display: "flex" }}>
        <button
          onClick={() => addMoney(Number(prompt()))}
          style={{ fontSize: "20px", backgroundColor: "red" }}
        >
          Пополнить счет
        </button>
        <button
          onClick={() => getMoney(Number(prompt()))}
          style={{ fontSize: "20px", backgroundColor: "green" }}
        >
          Снять со счета
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gold",
            fontSize: "20px",
            backgroundColor: "blue",
            width: "200px",
          }}
        >
          {cash}
        </div>
        <button
          onClick={() => addCustom(prompt())}
          style={{ fontSize: "20px", backgroundColor: "red" }}
        >
          Добавить клиента
        </button>
        <button style={{ fontSize: "20px", backgroundColor: "green" }}>
          Удалить клиента
        </button>
        <button
          onClick={() => dispatch(fetchClient())}
          style={{ fontSize: "20px", backgroundColor: "red" }}
        >
          Добавить клиентов
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {" "}
          {customers.map((customer) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "gold",
                fontSize: "20px",
                backgroundColor: "blue",
                width: "350px",
                height: "50px",
              }}
              onClick={() => delCustom(customer)}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "gold",
            fontSize: "20px",
            backgroundColor: "blue",
            width: "350px",
            height: "50px",
          }}
        >
          Клиенты отсутствуют
        </div>
      )}
       <p >hhhhhhh</p>
     
    </div>
    
  )
}
