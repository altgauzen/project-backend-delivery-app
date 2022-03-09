import React, { useState } from 'react';
import './DetailForDelivery.css';

import { useHistory } from 'react-router-dom';
import mockGetAllUsers from '../../utils/mock/mockGetAllUsers';

export default function DetailForDelivery() {
  const [select, setSelect] = useState(null);
  const [address, setAddress] = useState(null);
  const [number, setNumber] = useState(null);

  const handlerInput = ({ target: { value } }, set) => {
    set(value);
  };
  console.log(select, address, number);
  const history = useHistory();

  return (
    <div className="detail-for-delivery">
      <form className="form-address">
        <label htmlFor="select-seller">
          P.Vendedora Responsável
          <select
            id="select-seller"
            data-testid="customer_checkout__select-seller"
            onClick={ (event) => handlerInput(event, setSelect) }
          >
            {
              mockGetAllUsers.map((user) => (
                <option key={ user.id } value={ `${user.name}` }>{user.name}</option>
              ))
            }
          </select>
        </label>

        <label htmlFor="input-address">
          Endereço
          <input
            type="text"
            name="input-address"
            data-testid="customer_checkout__input-address"
            onChange={ (event) => handlerInput(event, setAddress) }
          />
        </label>

        <label htmlFor="input-addressNumber">
          Número
          <input
            type="text"
            name="input-addressNumber"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ (event) => handlerInput(event, setNumber) }
          />
        </label>
      </form>

      <button
        data-testid="customer_checkout__button-submit-order"
        type="submit"
        onChange={ () => history.push('/customer/orders') }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
