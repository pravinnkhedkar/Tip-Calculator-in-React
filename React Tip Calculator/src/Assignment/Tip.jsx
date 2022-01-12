import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

function Tip() {
  const [bill, setBill] = useState(null);
  const [service, setService] = useState(null);
  const [customer, setCustomer] = useState('');
  const [customerTip, setCustomerTip] = useState([null]);
  const [lists, setLists] = useState([]);
  const [customerQuantity, setCustomerQuantity] = useState([null]);
  const [sum, setSum] = useState(null);

  const getCustomer = () => {
    setCustomerQuantity(lists.length);
    setSum(
      customerTip.reduce((total, num) => {
        return total + num;
      })
    );

    console.log(sum);
  };

  const getList = () => {
    if (bill && service && customer) {
      let tip = (bill * service) / 100;
      setCustomerTip([...customerTip, tip]);

      let count = customer;
      setLists([...lists, { customers: count, tips: tip }]);
      setBill('');
      setService('');
      setCustomer('');
    }
  };

  const handleChange = (event) => {
    setBill(Number(event.target.value));
  };

  const selectChange = (val) => {
    setService(Number(val.target.value));
  };

  const chooseChange = (item) => {
    setCustomer(item.target.value);
  };
  return (
    <div>
      <h5>ENTER YOUR BILL AMOUNT</h5>
      <input type="number" onChange={handleChange} value={bill} /> <hr />
      <span>
        <select value={service} name="" onChange={selectChange}>
          <option value=""> .....Choose Option....</option>

          <option value="20"> Excellent </option>
          <option value="15"> Very Good </option>
          <option value="10"> Good </option>
          <option value="5"> Poor </option>
        </select>{' '}
        &nbsp; &nbsp; &nbsp;
        <input value={customer} type="text" onChange={chooseChange}></input>
        <Button
          type="button"
          onClick={getList}
          class="btn btn-primary"
          data-bs-toggle="button"
          autocomplete="off"
        >
          {' '}
          <b>ADD CUSTOMER </b>
        </Button>{' '}
        <hr />
        <h6>CUSTOMER LIST </h6>
        <ul>
          {lists.map((elem) => (
            <li>
              {' '}
              <h6>
                {elem.customers} has offered Rs.{elem.tips} Tip.
              </h6>{' '}
            </li>
          ))}
        </ul>
      </span>
      <div class="d-grid gap-2">
        <Button class="btn btn-primary" onClick={getCustomer} type="button">
          <b>CLICK TO CALCULATE TOTAL CUSTOMER AND TIP VALUE</b>
        </Button>
      </div>{' '}
      <hr />
      <Table class="table">
        <thead>
          <tr>
            <th scope="col">SR.NO.</th>
            <th scope="col">NO.OF CUSTOMER</th>
            <th scope="col">TOTAL TIP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{customerQuantity}</td>
            <td>{sum}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default Tip;
