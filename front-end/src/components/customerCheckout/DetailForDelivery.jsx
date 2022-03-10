import React, { useState, useContext } from 'react';
import './DetailForDelivery.css';
import { useHistory } from 'react-router-dom';
import contextValue from '../../context/context';
import SalesService from '../../service/sale.service';
import Utils from '../../utils/functions';

export default function DetailForDelivery() {
  const [, setSelect] = useState(null);
  const [address, setAddress] = useState(null);
  const [number, setNumber] = useState(null);
  const { totalPrice, cart, user } = useContext(contextValue);
  const history = useHistory();

  const handlerInput = ({ target: { value } }, set) => {
    set(value);
  };

  const saleCreate = async () => {
    const obj = {
      userId: user.id,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      status: 'AGUARDANDO PAGAMENTO',
    };
    new SalesService()
      .createSale(Utils.getLocalStorage('token'), obj)
      .then((res) => {
        console.log(res);
        history.push(`/customer/orders/${res.id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
              cart.map((car) => (
                <option key={ car.id } value={ `${car.name}` }>{car.name}</option>
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
        onClick={ saleCreate }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}
